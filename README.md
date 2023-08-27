#  Jest. Unit-тесты и отчёты

### Добавить отчёты о покрытии.

1. Отчёты должны создаваться во время прогона тестов с помощью скрипта. Его нужно добавить в блок со скриптами в файле package.json.
2. Скрипт для запуска оценки покрытия должен запускать команду "jest --collectCoverage". Создайте нужный скрипт по аналогии с существующим скриптом "test".
3. Для корректной работы, нужно задать критерии, где будут работать отчёты, а также параметры, которые исключают проверку в определённых местах проекта.

В нашем случае:

проверять покрытие кода во всех файлах с расширениями .js и .jsx;
исключать из проверки директорию "/node_modules/";
исключать из проверки директорию "/coverage/", в которой будут создаваться отчёты.
Документация, которая вам поможет, есть по ссылке.


# UI-тест на Playwright

1. Подготовить тестовые данные:
2. Создать тест 1 «Успешная авторизация»:
откройте форму авторизации;
добавьте ваш email в поле для ввода email;
добавьте ваш пароль в поле для ввода пароля;
нажмите на кнопку Войти.
Проверьте ожидаемый результат:
проверьте, что открылась страница профиля;
удостоверьтесь, что страница профиля открыта, например, проверив элемент h2 и текст заголовка.
3. Создать тест 2 «Неуспешная авторизация»:
повторите тест 1, используя невалидные данные для авторизации.
Проверьте результат:
проверьте текст об ошибке в появившемся блоке.
Запушьте репозиторий с тестами на GitHub.