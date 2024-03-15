# drawers

Система работает поверх уже подготовленной разметки, не модифицирует структуру DOM.

# ready
* Окно открытое позже имеет больший zIndex чем окно открытое ранее
* Возможность задать фиксированный zIndex (на самом деле, zIndex не устанавливается в inline стили, в прописывается в css переменную --z-index, что дает возможность задать произвольный zIndex)
* Возможность закрытия по нажатию Esc
* Возможность закрытия по нажатию вне тела окна, с опцией проверки объекта, на котором произошло нажатие, например,если в теле модалки было открыто стороннее диалоговое окно, то по нажатие внутри этого диалогового окна не закрывалось текущее.
* Возможность подтверждения закрытия.
* Поддержка создания группы окон, окна считают свой zIndex относительно других окон в группе, но не всех существующих.
* Каждая отедельная группа может установить блокировку скролла ближайшего к ней контейнера `[data-scrollable], html`
(добавляет class scroll-lock-by-drawer)
* Служебный класс drawer-trigger_active добавляется ко всем связанным тригерам (кнопкам открытия/закрытия), пока окно открыто

# to do
* Набор встроенных диалоговых окон alert, confirm, prompt etc
* Опционально фокус на первом поле вводе по открытию
* Назначение окну индекса внутри группы [data-drawer-id]
* Возможность переключаться между немодальными окнами в группе (изменение zIndex)
* Возможность вкладывать группу в группу
* Если клик произошел внутри модального окна, то событие этого клика не должно закрывать другие окна
(На данный момент события клика внутри других окон игнорируются безусловно)

# get started
Подключаем через cdn, например так:
<script defer src="https://cdn.jsdelivr.net/npm/vanilla-drawers@1.0.11/dist/drawers.umd.js"></script>

Пример разметки (в исходниках есть demo):
<body>
	<div class="triggers">
		<button type="button" data-drawer-open="example-1">Open example-1</button>
	</div>
	<!-- Будет помещен в группу "default" -->
	<div class="drawer" data-drawer="example-1">
		<div class="drawer__panel" data-elem="drawer.panel">
			<div class="drawer__body">
				<div class="drawer__inner">
					<button type="button" data-drawer-close="example-1">Close example-1</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Создание группы окон "system", обязателен только атрибут data-drawers-group -->
	<div class="drawers-group" data-drawers-group="system">
		<!-- data-drawer="example-2" Обязательный атрибут, позволяющий скрипту найти окно и назначить alias -->
		<div class="drawer" data-drawer="example-2">
		<!-- data-elem="drawer.panel" Обязательный атрибут, позволяющий скрипту найти панель окна (могут быть какие угодна прослойки выше, оборачивающие панель) -->
			<div class="drawer__panel" data-elem="drawer.panel">
				<div class="drawer__body">
					<div class="drawer__inner">
						<button type="button" data-drawer-close="example-2">Close example-2</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

Пример стилей (в исходниках есть demo):
.drawers-group {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
}
.drawers-group > * {
	pointer-events: all;
}
.drawer {
	display: flex;
	justify-content: center;
	position: fixed;
	z-index: var(--z-index);
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: rgba(78, 78, 78, 0.342);
}
.drawer__panel {
	display: flex;
	height: 100%;
	width: 100%;
	max-width: 600px;
	max-height: 400px;
	margin: auto;
	overflow-x: hidden;
	transition: visibility 0.4s, opacity 0.4s, transform 0.4s;
}
.drawer__body {
	width: 100%;
}
.drawer:not(.drawer_open), .drawer:not(.drawer_open) .drawer__panel  {
	visibility: hidden;
	opacity: 0;
	transform: none;
}