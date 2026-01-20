import eslint from '@eslint/js'
import nextVitals from 'eslint-config-next/core-web-vitals'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const eslintConfig = defineConfig([
	// ---------------------------
	// 1. ESLint + TypeScript 추천 규칙
	// ---------------------------
	eslint.configs.recommended, // ESLint 기본 추천 규칙
	tseslint.configs.recommended, // TypeScript 추천 규칙
	tseslint.configs.stylistic, // TypeScript 스타일 관련 규칙

	// ---------------------------
	// 2. Next.js 기본 ESLint 설정
	// ---------------------------
	...nextVitals,

	// ---------------------------
	// 3. 공통 Ignore 설정
	// ---------------------------
	{
		ignores: [
			// 의존성 및 빌드 산출물
			'**/node_modules/**',
			'**/.next/**',
			'**/out/**',
			'**/build/**',
			'**/dist/**',

			// 설정 및 메타 파일
			'**/*.config.{js,mjs,cjs,ts,mts}',
			'**/next-env.d.ts',
			'**/tsconfig*.json',

			// 락 파일
			'**/yarn.lock',
			'**/package-lock.json',
			'**/pnpm-lock.yaml',

			// 자동 생성 파일
			'**/*.gen.{ts,tsx,js,jsx}',
			'**/openapi/**',
			'**/client-fetch/**',

			// 개발 도구
			'**/.cursor/**',
			'**/.vscode/**',
			'**/.idea/**',

			// 스크립트 및 문서
			'**/scripts/**',
			'**/*.mdc',
			'**/*.md',

			// 기타
			'**/Dockerfile',
			'**/.yarn/**',
			'**/.husky/**',
		],
	},

	// ---------------------------
	// 4. 커스텀 플러그인
	// ---------------------------
	{
		plugins: {
			'better-tailwindcss': eslintPluginBetterTailwindcss,
		},
		settings: {
			'better-tailwindcss': {
				entryPoint: 'shared/styles/index.css',
			},
		},
		rules: {
			/** ────────────────────────────────
			 *  TailwindCSS 규칙
			 *  ──────────────────────────────── */
			...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
			'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
			'better-tailwindcss/no-unregistered-classes': 'off',
			'better-tailwindcss/enforce-consistent-class-order': 'off',
			'better-tailwindcss/no-duplicate-classes': 'off',

			/** ────────────────────────────────
			 *  Import 관련 규칙
			 *  ──────────────────────────────── */
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external', 'internal'], 'parent', ['sibling', 'index']],
					'newlines-between': 'never',
					alphabetize: {
						// order: "asc",
						orderImportKind: 'asc',
						caseInsensitive: false,
					},
				},
			],
			'sort-imports': [
				'error',
				{
					ignoreCase: false,
					ignoreDeclarationSort: true, // import/order와 충돌 방지
				},
			],

			/** ────────────────────────────────
			 *  TypeScript 관련 규칙
			 *  ──────────────────────────────── */
			'@typescript-eslint/no-explicit-any': 'off', // 프로젝트에서 any 허용
			'@typescript-eslint/no-unused-vars': [
				'warn', // error → warn으로 변경
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			// Context 초기값 등에서 빈 함수 허용
			'@typescript-eslint/no-empty-function': 'off',

			/** ────────────────────────────────
			 *  기타 프로젝트 전용 규칙
			 *  ──────────────────────────────── */
			'react-hooks/exhaustive-deps': 'warn',
			'no-console': ['warn', { allow: ['info', 'debug', 'warn', 'error'] }],
			'no-debugger': 'warn',
			'no-fallthrough': 'error',

			'no-restricted-syntax': [
				'error',
				{
					selector: "ImportDeclaration[source.value='clsx']",
					message:
						'The usage of clsx is restricted. Please use cn() from @/common/utils instead.',
				},
				{
					selector:
						"CallExpression[callee.object.name='z'][callee.property.name='preprocess']",
					message:
						'The usage of `z.preprocess` is deprecated. Use `transform` and `pipe` instead.',
				},
			],
			'no-empty-function': 'off',
		},
	},

	// ---------------------------
	// 5. Prettier 적용 (eslint와의 충돌 해결)
	// ---------------------------
	eslintConfigPrettier,
])
export default eslintConfig
