import React from 'react';
import { Select } from 'antd';
import shallow from 'zustand/shallow';
import { LanguageStore } from '@/store';

const { Option } = Select;

function TopBarLangSwitch(props) {
  const [languageId, changeLanguage] = LanguageStore(
    state => [state.languageId, state.changeLanguage],
    shallow,
  );

  function handleLangChange(value) {
    changeLanguage(value);
  }

  return (
    <Select
      {...props}
      size="large"
      defaultValue={languageId}
      onChange={handleLangChange}
    >
      <Option value="english">EN</Option>
      <Option value="bangla">BN</Option>
    </Select>
  );
}

export default TopBarLangSwitch;
