function triangleArea(sideA,sideB,sideC){
	const semiPerimeter = (sideA + sideB + sideC) / 2 ;
	return Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
}

triangleArea(3,4,5);
