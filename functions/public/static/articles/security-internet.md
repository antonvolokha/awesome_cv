# Безопасность в сети. Гигиена цифрового поведения.
Я записал два видео, которые касаются информационной безопасности. И некоторые комментарии под ними меня просто поражают. Люди иногда пишут какие-то вещи и даже не понимают, что их могут читать другие люди и поверить им.

Например:

> “Да зачем нужен менеджер паролей, я все пароли держу в голове”

> “Да зачем нужен менеджер паролей, у меня всего два пароля, для важный сайтов сложный и для неважных несложный”

> “Не нужен менеджер паролей, ведь на бумаге надежнее”

> “Да зачем париться о паролях, ведь государство о тебе и так все знает”

Настолько безумные доводы, что прям хочется кричать. Нееет, так нельзя.

Или еще некоторые люди говорят

> Да у меня нет ничего важного, зачем мне эта безопасность

Да, даже если у тебя сейчас нет ничего важного и ты просто школьник, то тебе нужно учиться тому, как вести себя в интернете. Нужно понимать основы безопасности. Ведь ты когда-нибудь вырастешь и станешь взрослым. А если у тебя нет навыков, то все будет грустно.

Точно так же мне кажется у людей ошибочная логика, в плане управления финансов. Когда люди говорят, да я все равно мало зарабатываю. Поэтому я и не веду учет финансов и не инвестирую. И на мой взгляд человек путает причину и следствия. Денег у тебя нет потому, что как раз ты не ведешь учет и не инвестируешь.

ОДИНАКОВЫЕ ПАРОЛИ
-----------------

Не используйте одинаковые пароли для различных сервисов. Это огромная ошибка. Сервис может как-то потерять базу. И соответственно все ваши остальные сервисы будут под большой угрозой.

Я работаю в компании и разрабатываю большие веб-проекты. И однажды к нам пришел заказчик, у которого был большой проект. Его знают множество людей, там больше трех миллионов пользователей. И при этом все пароли в базе данных были в открытом виде. И нам прислали эту базу. По нормальному вообще пароли должны быть захешированы. Но тут нам просто прислали огромную базу где есть почта и пароль в открытом виде.

Вот если бы эта база попала бы в плохие руки, то что бы сделал нехороший человек. Он бы сразу же пытался бы войти в саму почту с точно таким же паролем. И уверяю вас, что каждый десятый человек не парится о собственной безопасности и использует один и тот же пароль для всех сервисов. И вот такие люди могут сильно пострадать. А после того как ты вошел в почту, то все. Меняешь пароль. А потом потихоньку восстанавливаешь пароли ко всяким банковским приложениям, читаешь почту, заходишь в пейпал. Ну просто представьте сами, что может сделать человек зайдя в вашу личную почту.

Поэтому это очень важное правило. Никогда не используйте одинаковые пароли для разных сервисов.

Принципы безопасности
---------------------

Если вы хотите обезопасить свою информацию, то первое, что вам нужно сделать — понять основные принципы.

В наиболее полном объеме про это можно почитать в книге от Кевина Митника, которая называется «Искусство обмана» (The Art of Deception). Там огромное количество историй о том, в какие проблемы попадали компании из-за того, что не обучали своих сотрудников базовым принципам защиты своей информации.

И большая часть взломов, проникновений происходит из-за социальной инженерии.

Когда человек не взламывает сам сервер. И не перебирает ваш пароль. А когда вы сами отдаете человеку свой пароль. Каким-либо образом. Вас просто разводят. Это происходит когда вы кликаете на непонятные ссылки. Когда вы вводите свой логин и пароль не на сайт vk.com, а в какой-нибудь vkontankte.ru. Или когда вам звонят с непонятного номера, представляются сотрудниками банка и говорят вам о том, что ваша карта сейчас будет заблокирована если вы не скажете пароль.

Я сам помню времена, когда я учился в университете. Это технический вуз. И все студенты технари.

И в ВУЗе был такой чат, который назывался IRC. И в этом чате сидело большое количество студентов.

И специфика сервера IRC заключалась в том, что иногда сервер тебе слал сообщение с просьбой авторизоваться. Он тебе говорил прям, напиши /msg nickserv identify _YourPassword_

Но ты, например, мог сделать себе ник nickserw

И писать людям сообщения, которые выглядят точно так же как сообщения от сервера только там було /msg nickserw identify _YourPassword_

И человек этого не замечал, копировал строку и отправлял тебе свой пароль.

А имея пароль человека ты мог делать все что угодно, например, ты мог как-то там прилинковать его ник и писать за него сообщения в канал. Ну и вообще развлекаться как угодно.

И вот времена идут, а собственно методы не меняются. Все осталось точно таким же как и раньше. Точно таким же способом у вас могут украсть пароль.

ДВУХФАКТОРНАЯ АВТОРИЗАЦИЯ
-------------------------

Люди не понимают зачем нужна двухфакторка. И вообще многие считают ее избыточной.

Если вы зайдете на какую-нибудь гидру в даркнете, то вы увидите, что там например за 100.000 рублей можно перевыпустить сим-карту. Чужую симкарту. Или вам, например, за примерно схожие суммы вам могут предоставить все переписки какого-нибудь человека из VK. И от разных других сервисов.

Иногда это связано с тем, что сами администраторы, которые имеют к этому доступ сливают данные. А иногда какие-нибудь ребята пользуются какой-то брешью в системе. И в этом случае, знаете ли, гораздо лушче если у вас будет второй фактор авторизации.

То есть, всегда защищайте свою информацию как можно лучше.

И желательно, не используйте телефон или СМС как второй фактор. Лучше используйте TOTP или физический ключ.

ПАРОЛИ В ОТКРЫТОМ ВИДЕ
----------------------

Не храните пароли в открытом виде (недавняя история с google-документами, которые были проиндексированы яндексом, это показала).

Точно так же не слушайте людей, которые советуют вам записывать свои пароли на листочек.

И сами не храните пароли просто в блокнотике.

Самое оптимальное решение это менеджер паролей. Пора бы это уже усвоить.

РАЗГЛАШЕНИЕ ПАРОЛЯ
------------------

Никому не говорите пароль. Даже сотрудникам службы поддержки. И будьте уверены, что если кто-то когда-нибудь спрашивает ваш пароль, то это сто процентов моненники. Все сервисы устроены так, чтобы пароль знали только вы. Ни один сотрудник компании не имеет права спрашивать у вас ваш пароль.

Wi-Fi
-----

Не используйте бесплатные Wi-Fi сети. А если используете, будьте аккуратны и старайтесь не работать на сайтах без https-соединения.

Лушче, конечно, никогда не использовать бесплатный вай-фай. Вы даже не представляете как легко развернуть бесплатную точку доступа чтобы как-то воровать чужие данные.

Мобильный интернет стоит сейчас просто копейки. Используйте его и просто никогда не используйте бесплатный вай-фай.

ШИФРУЙТЕ ДИСК
-------------

Знаете, что будет, если вы потеряете свой ноутбук, и его найдет плохой человек? Он включит его с любой загрузочной флешкой и спокойно получит доступ ко всем вашим данным. Поэтому очень важно зашифровать весь диск. Чтобы при потере вашего девайса человек не смог получить к нему доступ.

Следите за доступом
-------------------

Когда вы продаете свои девайсы, то не забывайте удалять их из ваших учетных записей. Это очень важно.

[myaccount.google.com/device-activity](https://myaccount.google.com/device-activity)

[www.dropbox.com/account/security](https://www.dropbox.com/account/security)

[www.icloud.com/#settings](https://www.icloud.com/#settings)

Пермишены
---------

Бывают ситуации, когда поставишь какое-либо приложение, а оно требует полный доступ к папке Дропбокса. Хотя казалось бы, этому приложению совершенно не нужен такой доступ. Ну, на крайний случай, ему хватило бы Access type: «App folder».

Такие вещи для Дропбокса можно проверить тут:

[www.dropbox.com/account/connected\_apps](https://www.dropbox.com/account/connected_apps)

А некоторые приложения требуют доступ к Google Drive. Я не очень понимаю, для чего им доступ к моим документам. Это можно проверить по этой ссылке:

[myaccount.google.com/permissions](https://myaccount.google.com/permissions)

ДРУГИЕ СОВЕТЫ
-------------

Не используйте легкие пароли: пароли, которые могут быть связаны с вами или найдены в словаре.