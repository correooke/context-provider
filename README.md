# Aprender a utilizar Context (Provider-Consumer)

## Descripción

En este ejemplo sencillo se verá una lista, un buscador y un panel de configuración básico. 
Desde el panel de configuración el usuario podrá optar por un "tema oscuro" o un "tema claro"
También se puede elegir el idioma, inglés o español, sin utilizar ninguna librería agregada ya que escapa al propósito del ejemplo.

## ¿Qué es el Context? 

Es una alternativa nueva, introducida en React 16.3, en reemplazo de una API legacy. 
Permite una nueva forma de "hacer llegar" parámetros a componentes que estén profundo en el árbol de componentes. Otras posibilidades hasta el momento para hacer lo mismo eran las "render props" (component composition), los "HOC" y anteriormente "decorators" (obsoleto).

## Formas de consumir el contexto

- Dentro de un componente clase mediante la incorporación del campo estático "contextType" (ver ListTile)
- Dentro de un componente función mediante <ConfigurationContext.Consumer> (ver Search)
- Dentro de un componente mediante el hook useContext (ver Item)

## Usar un campo static 

Para inicializar el contexto y poder consumirlo dentro de un class component se puede hacer uso de la sintaxis experimental de campos públicos
Un ejemplo se puede ver en la clase "ListTitle" o en este ejemplo que proviene de la documentación de React: 

    class MyClass extends React.Component {
        static contextType = MyContext;
        render() {
            let value = this.context;
            /* render something based on the value */
        }
    }    

Para una explicación detallada de qué es la sintaxis de asignación de campos públicos en Javascript: https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

## Live Demo

Para poder acceder a una demo en ejecución de este ejemplo, se puede ingresar a la url:

https://codesandbox.io/s/github/correooke/context-provider

### Autor: Emiliano Ocariz


