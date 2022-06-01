// Dynamically set variants

        function changeButtonText(value) {
  document.getElementById("variantActionButton").innerText = "Select Variant";
  document.getElementById("modalActionButton").innerText = value;

  if (
    document.getElementById("modalActionButton").innerText == "Grand i10 NIOS"
  ) {
    var variants = [
      { name: "Era Executive" },
      { name: "Magna" },
      { name: "Sports" },
      { name: "Asta" },
    ];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant.name}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (
    document.getElementById("modalActionButton").innerText ==
    "The Grand New i20"
  ) {
    alert("Coming Soon")
    // var variants = [
    //   { name: "Magna" },
    //   { name: "Sports" },
    //   { name: "Asta" },
    //   { name: "Asta (O)" },
    // ];
    // document.getElementById("demo").innerHTML = variants
    //   .map(
    //     (variant) =>
    //       `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant.name}</a></li>`
    //   )
    //   .join("");
    // console.log("Sucsess");
  } else {
  }
}

function changeButtonText2(value) {
  document.getElementById("variantActionButton").innerText = value;

  var basicFeatures = [
"Safety",
"Immobilizer",
"Rear parking sensor",
"Driver & Passanger Airbag",
"Front seat belt pretensioner with load limiter",
"ABS with EBD",
"Child safety door lock",
"Driver & Passanger seat belt reminder",
"Speed alert system",
"Central locking",
"Speep/impact sensing door lock/unlock",
    "Day & night inside rear view mirror",
"Exterior",
"Body coloured bumbers",
"Body coloured outside door mirrors and handles",
"Front grille surround Silver",
"Turn indicators on outside door mirrors",
"R14(D=354.8mm) wheel covers",
"Sportz",
"Interior",
"Premium dual tone beige & black interior colour",
"Front & rear door map pockets with 1L bottle holders",
"Room lamp",
"Champagne gold interior colour garnish",
"Instrument panel & center fascia display",
"Tachometer",
"Gear shift Indicator (MT Only)",
"Door ajar warning",
"Low fuel warning",
"6.35 cm (2.6 inch) Advanced multi information disply (MID)",
"Dual tripmeter",
"Average fuel consumption",
"Average speed",
"Instanteneous fuel consumption",
"Distence to empty",
"Service reminder",
"Time elapsed",

"Audio",
"17.64cm(7inch) Touch screen audio video system with smart phone navigation",
"Bluetooth connectivity",
"USB connectivity",
"steering wheel mounted Audio, Bluetooth & Voice recognition",
"Hyundai iblue",
"Pole antenna",
"Front & rear speakers",
"Smartphone connectivity (Android Auto,Apple CarPlay & Mirrorlink)",

"Comfort & convenience",
"Motor driven (electic) power steering",
"Manual AC with rear AC vents",
"Front & Rear Power window",
"Rear seat bench folding",
"Remote fuel lid open",
"Remote tailgate open",
"Power outlet",
"Ticket holder",
"Electrically adjustable outside door mirrors",
"Rear parcel tray",
  ];
  document.getElementById("mainContent").innerHTML = basicFeatures
    .map(
      (basicFeature) =>
        `<div class="featureOnebyOne">
        <ul>
         <li><a href="#" onclick="changeButtonText2(this.innerText)">${basicFeature}</a></li>
         </ul>
         </div>`
    )
    .join("");
}
sdfc
