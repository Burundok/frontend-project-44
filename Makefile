install:	#	Установка
	npm ci
brain-games:	#	 Запуск игры
	node bin/brain-games.js
publish:	#	
	npm publish --dry-runnpm
lint:
	npx eslint