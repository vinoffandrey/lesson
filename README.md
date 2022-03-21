# lesson

# Инициализация git
---
git init инициализируем гит

git config --local user.name "Andrey Vinogradov" называем себя локально(--global глобально на всём компьютере)

git config --local user.email Vinogradow.Andrej@yandex.ru почта локально(--global глобально на всём компьютере)

git status показывает состояние проекта (фиксированные изменения и коммиты)

git log показывает какие коммиты, когда и кем были выполнены


# Синхронизация с GitHub
---
git remote add origin https://github.com/имяПользователя/названиеПроекта добавление удаленного репозитория(связь между локальным и удаленным)

git push -u origin master(или main) пуш файлов в GitHub, при этом запоминается путь, куда именно пушить (origin master)


# Работа с ветками в GitHub
---
git branch -M main переименовывает ветку в main
после следует прописать git push -u origin main


# Порядок залива коммита через терминал Visual Studio Code
---
git add -A зафиксировать все изменения в проекте 

git commit -a -m "Название комита" создать название комита

git push залить комит

git pull вытащить комит



# Ошибки:
---
fatal: Unable to create 'D:/all_projects/lestorg/.git/index.lock': File exists.

Решение: rm .git/index.lock
