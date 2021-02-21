var varia = document.getElementById('inr')

function converter() {
    var resultado = 0
    var l = 1
    for (let i = 0; i < varia.value.length; i++) {
        if (typeof varia.value[l] != 'undefined') {
            if (varia.value[i] == 'I') {
                if (varia.value[l] == 'I') {
                    resultado += 1
                } else if (varia.value[l] == 'V' || varia.value[l] == 'X' || varia.value[l] == 'L' || varia.value[l] == 'C') {
                    resultado -= 1
                }
            } else if (varia.value[i] == 'V') {
                if (varia.value[l] == 'I' || varia.value[l] == 'V') {
                    resultado += 5
                } else if (varia.value[l] == 'X' || varia.value[l] == 'L' || varia.value[l] == 'C') {
                    resultado -= 5
                }
            } else if (varia.value[i] == 'X') {
                if (varia.value[l] == 'I' || varia.value[l] == 'V' || varia.value[l] == 'X') {
                    resultado += 10
                } else if (varia.value[l] == 'L' || varia.value[l] == 'C') {
                    resultado -= 10
                }
            } else if (varia.value[i] == 'L') {
                if (varia.value[l] == 'I' || varia.value[l] == 'V' || varia.value[l] == 'X' || varia.value[l] == 'L') {
                    resultado += 50
                } else if (varia.value[l] == 'C') {
                    resultado -= 50
                }
            } else if (varia.value[i] == 'C') {
                if (varia.value[l] == 'I' || varia.value[l] == 'V' || varia.value[l] == 'X' || varia.value[l] == 'L' || varia.value[l] == 'C') {
                    resultado += 100
                }
            }
        } else {
            if (varia.value[i] == 'I') {
                resultado += 1
            } else if (varia.value[i] == 'V') {
                resultado += 5
            } else if (varia.value[i] == 'X') {
                resultado += 10
            } else if (varia.value[i] == 'L') {
                resultado += 50
            } else if (varia.value[i] == 'C') {
                resultado += 100
            }
        }
        l += 1
    }
    res.innerHTML = resultado
}
