# newlang

newlang es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), la mejor educación online de Latinoamerica

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esos dos caractéres

- Si la palabra inicia con Z, se le añade "pe" al final

- Si la palabra traducida tiene 10 o más letras se debe partir a la mitad y unir con un guión

- Si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install newlang
```

## Uso

````
import newlang from 'newlang'

newlang("Programar") // Program
newlang('Zorro') // Zorrope
newlang('Zarpar') // Zarppe
newlang('abecedario') // abece-dario
newlang('sometemos') SoMeTeMoS
```

## Créditos

- [David Vargas Dominguez(https://twitter.com/DavidVargas282)

## Licencia

- [MIT](https://opensource.org/licenses/MIT)