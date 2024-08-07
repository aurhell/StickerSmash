import PropTypes from 'prop-types'
import { StyleSheet, Image } from 'react-native'

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource

  return (
    <Image source={imageSource} style={styles.image} />
  )
}

ImageViewer.propTypes = {
  placeholderImageSource: PropTypes.number,
  selectedImage: PropTypes.string,
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
