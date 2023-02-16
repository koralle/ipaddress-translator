#[cfg(test)]
pub mod test {
    use std::net::Ipv4Addr;
    use std::str::FromStr;

    use ipnet::Ipv4Net;

    use crate::handlers::ipv4_network_info::{Ipv4NetworkInfo, IPV4_ADDRESS_PATTERN};

    #[parameterized::parameterized(
        input_ipaddress = { "192.168.1.40", "192.168.1.40/24" },
        expect_ipaddress = { [192, 168, 1, 40], [192, 168, 1, 40]},
        expect_subnet = { None, Some([255, 255, 255, 0]) },
    )]
    fn test_ipv4networkinfo_new(
        input_ipaddress: &str,
        expect_ipaddress: [u8; 4],
        expect_subnet: Option<[u8; 4]>,
    ) {
        let caps = IPV4_ADDRESS_PATTERN.captures(input_ipaddress).unwrap();

        let info = Ipv4NetworkInfo {
            address: Ipv4Addr::from_str(&caps["ipaddress"]).unwrap().octets(),
            subnet: caps.name("subnet").map(|_| {
                Ipv4Net::from_str(input_ipaddress)
                    .unwrap()
                    .netmask()
                    .octets()
            }),
        };

        assert_eq!(info.address, expect_ipaddress);
        assert_eq!(info.subnet, expect_subnet);
    }
}
