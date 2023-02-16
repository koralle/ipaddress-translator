#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

use std::result::Result;

pub mod handlers;

use handlers::ipv4_network_info::Ipv4NetworkInfo;
use handlers::network_info::TranslatableToBitString;

use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Response {
    pub address: String,
    pub subnet: Option<String>,
}

#[tauri::command]
fn translate(value: &str) -> Result<Response, String> {
    println!("translate: {:?}", value);
    match Ipv4NetworkInfo::new(value) {
        Ok(info) => Ok(Response {
            address: info.translate_ipaddress_to_bitstring(),
            subnet: info.translate_subnet_mask_to_bitstring(),
        }),
        Err(e) => {
            println!("{:?}", e.to_string());
            Err(e.to_string())
        }
    }
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            #[cfg(debug_assertions)]
            {
                let window = app.get_window("main").unwrap();
                window.open_devtools();
                window.close_devtools();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![translate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
