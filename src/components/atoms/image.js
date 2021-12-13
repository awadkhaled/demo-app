import Image from 'react-bootstrap/Image'

const ImageAtom = (props) => {
    return (
        <Image
            fluid={props.fluid}
            rounded={props.rounded}
            roundedCircle={props.roundedCircle}
            thumbnail={props.thumbnail}
            />
    )
}

export default ImageAtom