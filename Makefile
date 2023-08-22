install:	#	Установка
	npm ci
brain-games:	#	 Запуск игры
	node bin/brain-games.js
brain-even:	#	 Запуск игры "четность"
	node bin/brain-even.js
publish:	#	
	npm publish --dry-runnpm
lint:
	npx eslint