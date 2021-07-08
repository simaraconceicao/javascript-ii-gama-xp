function media(num1, num2, num3, num4, num5) {
    if (typeof num1 != "number" || num1 < 0 || num1 % 1 != 0) {
        return "valor invalido para num1";
    }
    if (typeof num2 != "number" || num2 < 0 || num2 % 1 != 0) {
        return "valor invalido para num2";
    }
    if (typeof num3 != "number" || num3 < 0 || num3 % 1 != 0) {
        return "valor invalido para num3";
    }
    if (typeof num4 != "number" || num4 < 0 || num4 % 1 != 0) {
        return "valor invalido para num4";
    }
    if (typeof num5 != "number" || num5 < 0 || num5 % 1 != 0) {
        return "valor invalido para num5";
    }

    return (num1+num2+num3+num4+num5)/5;

}

 console.log(media(1,2,3,4,5));
