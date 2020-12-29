module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:react/recommended", // 리액트 추천 룰셋
    "plugin:@typescript-eslint/recommended", // 타입스크립트 추천 룰셋
    // eslint의 typescript 포매팅 기능을 제거(eslint-config-prettier)
    "prettier/@typescript-eslint",
    // eslint의 포매팅 기능을 prettier로 사용함. 항상 마지막에 세팅 되어야 함.
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 11, // 최신 문법 지원
    sourceType: "module", // 모듈 시스템 사용시
    ecmaFeatures: {
      jsx: true, // 리액트 JSX 파싱
    },
  },
  rules: {
    "import/no-unresolved": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // eslint-plugin-react가 자동 리액트버전탐지
    },
  },
};

/*
  @typescript-eslint/parser: eslint에 타입스크립트 파서 사용
  @typescript-eslint/eslint-plugin: 타입스크립트 룰 모음집
  eslint-plugin-react: 리액트와 관련된 eslint 룰셋
  eslint-config-prettier : eslint에서 prettier와 겹치는 포매팅룰을 삭제합니다.
  eslint-plugin-prettier : eslint에 prettier의 포매팅 기능을 추가합니다.
*/
