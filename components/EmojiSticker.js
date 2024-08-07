import { View, Image } from 'react-native'
import propTypes from 'prop-types'

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  )
}

EmojiSticker.propTypes = {
  imageSize: propTypes.number,
  stickerSource: propTypes.number,
}
