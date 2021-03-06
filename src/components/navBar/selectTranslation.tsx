import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, createIcon, IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageNames } from '../../i18n/config'

enum Language {
  KO = 'ko',
  EN = 'en',
}

type Props = {
  isLarge: boolean
}

const TranslateIcon = createIcon({
  displayName: 'TranslateIcon',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill="currentColor"
      d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
    />
  ),
})

export default function SelectTranslation({ isLarge }: Props): JSX.Element {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState<Language>(Language.KO)

  function handleChange(value: string) {
    i18n.changeLanguage(value)
    setLanguage(value as Language)
  }

  return (
    <Menu>
      {isLarge ? (
        <MenuButton as={Button} leftIcon={<TranslateIcon />} rightIcon={<ChevronDownIcon />}>
          {LanguageNames[language]}
        </MenuButton>
      ) : (
        <MenuButton as={IconButton} icon={<TranslateIcon />} />
      )}
      <MenuList>
        <MenuOptionGroup
          defaultValue={language}
          onChange={(value) => {
            handleChange(value as string)
          }}
          title={t('toolBar.languages')}
          type="radio"
        >
          <MenuItemOption value={Language.KO}>{LanguageNames[Language.KO]}</MenuItemOption>
          <MenuItemOption value={Language.EN}>{LanguageNames[Language.EN]}</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
