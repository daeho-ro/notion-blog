import * as React from 'react';

import * as config from '@/lib/config';
import * as types from '@/lib/types';
import { useDarkMode } from '@/lib/use-dark-mode';

import Giscus from '@giscus/react';

export const Comment: React.FC = () => {
  const { isDarkMode } = useDarkMode()
  const info: types.GiscusInfo = config.giscus

  return (info &&
    <Giscus repo={info.repo}
			repoId={info.repoId}
			category={info.category}
			categoryId={info.categoryId}
			mapping={info.mapping}
			reactionsEnabled={info.reactionsEnabled || "1"}
			emitMetadata={info.emitMetadata || "0"}
			inputPosition={info.inputPosition || "top"}
			theme={isDarkMode ? info.darkTheme || info.theme : info.theme}
			lang={info.lang || "ko"}
			loading={info.loading || "lazy"}
	/>
  )
}
