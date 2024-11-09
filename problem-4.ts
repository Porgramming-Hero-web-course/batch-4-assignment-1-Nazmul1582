type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  type Shape = Circle | Rectangle;
  
  const calculateShapeArea = (shape: Shape): number =>
    shape.shape === "circle"
      ? Math.PI * shape.radius ** 2
      : shape.width * shape.height;
  
  console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
  