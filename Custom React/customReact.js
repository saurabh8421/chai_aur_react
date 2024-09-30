function customeRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    /*domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)*/

    for(prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target: '_blank',
        class:"link"
    },
    children: 'Click me to visit google'

}

const mainContiner = document.querySelector("#root")

customeRender(reactElement,mainContiner)