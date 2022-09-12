for (let i = 2; i < 100; i++) {
    let j = 2;
    let is_simple = 1;
    while (j <= i / 2) {
        if (i % j == 0) {
            is_simple = 0;
            break;
        }
        j++
    }
    if (is_simple) {
        console.log(i);
    }
}