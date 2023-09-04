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
brain-progression: #	Запуск игры "Прогрессия"
	node bin/brain-progression.js
brain-prime: #	Запуск игры "Простое ли число?"
	node bin/brain-prime.js
publish:	#	
	npm publish --dry-runnpm
lint:
	npx eslint