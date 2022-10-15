var canvas = document.createElement("canvas");
  canvas.width = 720 
  canvas.height = 500;

  //Get Context
  var ctx  = canvas.getContext("2d");
  ctx .fillStyle = "black";
  ctx .fillRect(0, 0, canvas.width, canvas.height);

  //Load Image
  var img = new Image();
  img.src = "/assets/sun.png";
  img.onload = function() {
  ctx .drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height
  );
};

  //Add Canvas
  canvas.id = "sun";
  document.body.appendChild(canvas);