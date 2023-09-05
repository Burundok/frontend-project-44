install:	#	Установка
	npm ci
brain-games:	#	 Приветствие
	node bin/brain-games.js
brain-even:	#	 Запуск игры "Четность"
	node bin/brain-even.js
brain-calc:	#	 Запуск игры "Калькулятор"
	node bin/brain-calc.js
brain-gcd: #	Запуск игры "Нод"
	node bin/brain-gcd.js
brain-progression: #	Запуск игры "Прогрессия"
	node bin/brain-progression.js
brain-prime: #	Запуск игры "Простое ли число?"
	node bin/brain-prime.js
publish:	
	npm publish --dry-runnpm
lint:
	npx eslint