const axios = require("axios");

const products = [
  {
    price: "N5,000",
    title: "Vehicle Mp3 Player",
    imageUrl: "/images/vehicle_mp3_player.jpg",
    pricetag: 5000
  },
  {
    price: "N20,000",
    title: "Razer Gaming Mouse",
    imageUrl: "/images/razer_naga_epic_rechargable_wireless_pc_gaming_mouse.jpg",
    pricetag: 20000
  },
  {
    price: "N15,000",
    title: "Mp3 Player",
    imageUrl: "/images/mp3_player.jpg",
    pricetag: 15000
  },
  {
    price: "N64,000",
    title: "Airsspu SmartWatch",
    imageUrl: "/images/airsspu-smartwatch.jpg",
    pricetag: 64000
  },
  {
    price: "N17,000",
    title: "Imperial Wireless Mouse",
    imageUrl: "/images/Imperial-Black-blue.jpg",
    pricetag: 17000
  },

  {
    price: "N70,000",
    title: "Philips Bluetooth Speaker",
    imageUrl: "/images/philips_bluetooth_speaker.png",
    pricetag: 70000
  },
  {
    price: "N125,000",
    title: "Customized Apple Airpods",
    imageUrl: "/images/AIrPodsBlack1.jpg",
    pricetag: 125000
  },
  {
    price: "N120,000",
    title: "Canon EF Lens",
    imageUrl: "/images/Canon_camera_lens.jpg",
    pricetag: 120000
  },
  {
    price: "N55,000",
    title: "Wirezoll Bluetooth Speaker",
    imageUrl: "/images/wirezoll_bluetooth_speakers.jpg",
    pricetag: 55000
  },

  {
    price: "N270,000",
    title: "Canon EOS-4000D Camera",
    imageUrl: "/images/Canon_camera.jpeg",
    pricetag: 270000
  },

  {
    price: "N310,000",
    title: "Samsung Galaxy S9",
    imageUrl: "/images/s9.jpg",
    pricetag: 310000
  },
  {
    price: "N80,000",
    title: "Oneplus 6 Smartphone",
    imageUrl: "/images/oneplus_6.jpg",
    pricetag: 80000
  },
  {
    price: "N140,000",
    title: "PS4",
    imageUrl: "/images/ps4.jpg",
    pricetag: 140000
  },
  {
    price: "N15,000",
    title: "Xbox One Controller",
    imageUrl: "/images/xbox_one_controller.jpg",
    pricetag: 15000
  },
  {
    price: "N70,000",
    title: "B&O Headset",
    imageUrl: "/images/b&O_wireless_headset.jpg",
    pricetag: 70000
  },
  {
    price: "N220,000",
    title: "Hoverboard",
    imageUrl: "/images/hoverboard.jpg",
    pricetag: 220000
  }
];

products.forEach(async product => {
  try {
    // await axios.post("http://localhost:1337/product", product);
    // await axios.post("https://last-straw.herokuapp.com/", product);
    await axios.post("https://ds-shopeazy-server.herokuapp.com/product", product);
  } catch (e) {
      console.error(e)
  }
});
