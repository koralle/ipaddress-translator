pub trait TranslatableToBitString {
    fn translate_ipaddress_to_bitstring(&self) -> String;
    fn translate_subnet_mask_to_bitstring(&self) -> Option<String>;
}

// pub static IPV6_ADDRESS_PATTERN: Lazy<Regex> = Lazy::new(|| {
//     Regex::new(
//          r"^(?P<ipaddress>([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))(/(?P<subnet>[0-9]|1[0-9]|2[0-9]|3[0-2]))?$",
//     ).unwrap()
// });

//#[derive(Debug, Serialize, Deserialize)]
//pub struct Ipv6NetworkInfo {
//    pub ipaddress: [u16; 8],
//    pub subnet_mask: Option<[u16; 8]>,
//}

// #[cfg(test)]
// mod test {
//
//     use super::{Ipv4NetworkInfo, TranslatableToBitString};
//
//     #[test]
//     fn it_works_new() {
//         match Ipv4NetworkInfo::new("192.168.1.40/24") {
//             Ok(addr) => {
//                 assert_eq!(addr.ipaddress, [192, 168, 1, 40]);
//                 assert_eq!(addr.subnet_mask, Some([255, 255, 255, 0]));
//             }
//             Err(_) => panic!(""),
//         }
//     }
//
//     #[test]
//     fn it_works_translate() {
//         match Ipv4NetworkInfo::new("192.168.1.40/24") {
//             Ok(addr) => {
//                 assert_eq!(
//                     addr.translate_ipaddress_to_bitstring(),
//                     "11000000 10101000 00000001 00101000".to_string()
//                 );
//                 assert_eq!(
//                     addr.translate_subnet_mask_to_bitstring(),
//                     Some("11111111 11111111 11111111 00000000".to_string()),
//                 )
//             }
//             Err(_) => panic!(""),
//         }
//     }
// }
