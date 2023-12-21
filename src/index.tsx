import type { FC } from 'react';
import React, { Fragment, useLayoutEffect } from 'react';
import { type ImageProps, Image } from 'react-native';
import { useConvertTOWebp } from './api_hooks/convertToWebP/useContvertToWebp';

const WebpImage: FC<ImageProps> = ({ src, source, ...props }) => {
  const { convertFunction, convertedImage } = useConvertTOWebp();
  useLayoutEffect(() => {
    if (src) {
      convertFunction(src);
    } else if (
      source &&
      typeof source === 'object' &&
      'uri' in source &&
      source.uri
    ) {
      convertFunction(source.uri);
    } else if (typeof source === 'number') {
      convertFunction(Image.resolveAssetSource(source).uri);
    }
  }, [convertFunction, source, src]);
  return (
    <Fragment>
      {convertedImage ? (
        <Image source={{ uri: convertedImage }} {...props} />
      ) : null}
    </Fragment>
  );
};

export default WebpImage;
