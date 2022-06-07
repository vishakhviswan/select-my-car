// Dynamically set variants

function changeButtonText(value) {
  document.getElementById("variantActionButton").innerText = "Select Variant";
  document.getElementById("mainContent").innerText = null;
  document.getElementById("modalActionButton").innerText = value;

  if (
    document.getElementById("modalActionButton").innerText == "Grand i10 NIOS"
  ) {
    var variants = ["Era Executive", "Magna", "Sports", "Asta"];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (
    document.getElementById("modalActionButton").innerText ==
    "The Grand New i20"
  ) {
    var variants = ["Magna", "Sports", "Asta", "Asta (O)"];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (
    document.getElementById("modalActionButton").innerText ==
    "The Grand New i20"
  ) {
    var variants = ["Magna", "Sports", "Asta", "Asta (O)"];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (
    document.getElementById("modalActionButton").innerText ==
    "The Grand New i20"
  ) {
    var variants = ["Magna", "Sports", "Asta", "Asta (O)"];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (
    document.getElementById("modalActionButton").innerText == "The i20 N Line"
  ) {
    var variants = ["N6", "N8"];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (document.getElementById("modalActionButton").innerText == "Venue") {
    var variants = ["E", "S", "S+", "S(O)", "SX", "SX(O)"];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (document.getElementById("modalActionButton").innerText == "Verna") {
    var variants = ["E", "S+", "SX", "SX(O)", "SX(O)Turbo"];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (document.getElementById("modalActionButton").innerText == "Creta") {
    var variants = ["E", "EX", "S", "SX EXECUTIVE", "SX", "SX(O)"];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }

  if (document.getElementById("modalActionButton").innerText == "Alkazar") {
    var variants = [
      "Prestige MT",
      "Prestige (O) AT",
      "Platinum MT",
      "Platinum (O) AT",
      "Signature MT",
      "Signature (O) AT",
    ];
    document.getElementById("demo").innerHTML = variants
      .map(
        (variant) =>
          `<li><a href="#" onclick="changeButtonText2(this.innerText)">${variant}</a></li>`
      )
      .join("");
    console.log("Sucsess");
  } else {
  }
}

function changeButtonText2(value) {
  document.getElementById("engineActionButton").innerText =
    "Select Engine & Trim plan";
  document.getElementById("mainContent").innerText = null;
  document.getElementById("variantActionButton").innerText = value;

  if (
    document.getElementById("modalActionButton").innerText ==
      "Grand i10 NIOS" &&
    document.getElementById("variantActionButton").innerText == "Era Executive"
  ) {

    // var double = (x) => x * 2;
    // var doubledArray = basicFeatures.map((subarray) => subarray.map(double));

    console.log("abcd");
    document.getElementById("mainContent").innerHTML = i10safety.features.map(
      (basicFeature) =>
        `
         <li><a href="#" onclick="changeButtonText2(this.innerText)">${basicFeature}</a></li>
         `
    ).join("");
    
  } else {
  }
}
