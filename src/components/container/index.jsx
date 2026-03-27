export default function Container({ children, className = "", style = {} }) {

    return (

        <div className={`mx-auto px-6 lg:max-w-340 h-full ${className}`} style={style}>
            { children }
        </div>

    )

}
