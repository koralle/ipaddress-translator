use anyhow::anyhow;
use ipnet::Ipv4Net;
use once_cell::sync::Lazy;
use regex::Regex;
use serde::{Deserialize, Serialize};
use std::net::Ipv4Addr;
use std::str::FromStr;

use super::network_info::TranslatableToBitString;

pub static IPV4_ADDRESS_PATTERN: Lazy<Regex> = Lazy::new(|| {
    Regex::new(
        r"^(?P<ipaddress>(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))(/(?P<subnet>[0-2]?[0-9]|3[0-2]))?$",
    ).unwrap()
});

#[derive(Debug, Serialize, Deserialize)]
pub struct Ipv4NetworkInfo {
    pub address: [u8; 4],
    pub subnet: Option<[u8; 4]>,
}

impl Ipv4NetworkInfo {
    pub fn new(addr: &str) -> Result<Self, anyhow::Error> {
        // a.b.c.d/e はipnet::Ipv4Netでないとparseできない一方で、
        // a.b.c.d   はstd::net::Ipv4Addrでないとparseできない
        match IPV4_ADDRESS_PATTERN.captures(addr) {
            Some(c) => Ok(Ipv4NetworkInfo {
                address: Ipv4Addr::from_str(&c["ipaddress"]).unwrap().octets(),
                subnet: c
                    .name("subnet")
                    .map(|_| Ipv4Net::from_str(addr).unwrap().netmask().octets()),
            }),
            None => Err(anyhow!("Please type a correct IPv4 address.")),
        }
    }
}

impl TranslatableToBitString for Ipv4NetworkInfo {
    fn translate_ipaddress_to_bitstring(&self) -> String {
        self.address
            .iter()
            .map(|u| format!("{:08b}", u))
            .collect::<Vec<String>>()
            .join(" ")
    }
    fn translate_subnet_mask_to_bitstring(&self) -> Option<String> {
        self.subnet.map(|s| {
            s.iter()
                .map(|u| format!("{:08b}", u))
                .collect::<Vec<String>>()
                .join(" ")
        })
    }
}
