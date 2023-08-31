install:	#	Установка
	npm ci
brain-games:	#	 Запуск игры
	node bin/brain-games.js
brain-even:	#	 Запуск игры "четность"
	node bin/brain-even.js
brain-calc:	#	 Запуск игры "четность"
	node bin/brain-calc.js
brain-nod: #	Запуск игры "Нод"
	node bin/brain-nod.js
publish:	#	
	npm publish --dry-runnpm
lint:
	npx eslint