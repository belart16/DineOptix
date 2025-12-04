// Данные приложения
const appData = {
  "analytics": {
    "overview": {
      "totalVisitors": 1247,
      "dailyAverage": 180,
      "averageCheck": 320,
      "satisfaction": 4.2,
      "monthlyRevenue": 425000,
      "profitMargin": 28.5,
      "wasteReduction": -15.3,
      "repeatCustomers": 78.2
    },
    "hourlyHeatmap": [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      [2, 1, 0, 0, 1, 3, 15, 45, 85, 120, 165, 220, 280, 195, 145, 95, 65, 35, 25, 15, 8, 5, 3, 2],
      [3, 2, 1, 0, 2, 5, 18, 48, 88, 125, 170, 225, 285, 198, 148, 98, 68, 38, 28, 18, 10, 7, 4, 3],
      [4, 3, 2, 1, 3, 7, 20, 50, 90, 128, 175, 230, 290, 200, 150, 100, 70, 40, 30, 20, 12, 9, 6, 4],
      [5, 4, 3, 2, 4, 9, 22, 52, 92, 130, 180, 235, 295, 205, 155, 105, 75, 45, 35, 25, 15, 12, 9, 6],
      [6, 5, 4, 3, 5, 11, 25, 55, 95, 135, 185, 240, 300, 210, 160, 110, 80, 50, 40, 30, 20, 17, 14, 11],
      [3, 2, 1, 1, 2, 4, 8, 15, 25, 35, 45, 55, 85, 75, 65, 45, 35, 25, 18, 12, 8, 5, 3, 2]
    ],
    "topLowMarginDishes": [
  {
    "name": "Стейк из лосося",
    "cost": 420,
    "price": 480,
    "profitPerPortion": 60,
    "margin": 12.5,
    "monthlyProfit": 30000,
    "potentialMonthlyProfit": 75000, // при марже 25%
    "orders": 500,
    "reason": "Слишком низкая маржинальность для премиум-блюда"
  },
  {
    "name": "Салат с креветками",
    "cost": 180,
    "price": 200, 
    "profitPerPortion": 20,
    "margin": 10.0,
    "monthlyProfit": 8000,
    "potentialMonthlyProfit": 24000, // при марже 30%
    "orders": 400,
    "reason": "Высокие риски порчи не оправдывают низкую маржу"
  },
  {
    "name": "Тирамису",
    "cost": 95,
    "price": 100,
    "profitPerPortion": 5,
    "margin": 5.0,
    "monthlyProfit": 2250,
    "potentialMonthlyProfit": 11250, // при марже 25%
    "orders": 450,
    "reason": "Трудоемкость приготовления не учитывается в цене"
  },
  {
    "name": "Суп том-ям",
    "cost": 110,
    "price": 120,
    "profitPerPortion": 10,
    "margin": 8.3,
    "monthlyProfit": 6340,
    "potentialMonthlyProfit": 19020, // при марже 25%
    "orders": 634,
    "reason": "Экзотичные ингредиенты требуют более высокой наценки"
  },
  {
    "name": "Говядина по-бургундски", 
    "cost": 280,
    "price": 300,
    "profitPerPortion": 20,
    "margin": 6.7,
    "monthlyProfit": 4000,
    "potentialMonthlyProfit": 20000, // при марже 25%
    "orders": 200,
    "reason": "Длительное приготовление делает блюдо нерентабельным"
  }
],
    "topDishes": [
      {"name": "Борщ", "orders": 1800, "change": "+12%", "category": "Первые блюда"},
      {"name": "Куриная котлета с пюре", "orders": 1750, "change": "+8%", "category": "Вторые блюда"},
      {"name": "Салат Цезарь", "orders": 1200, "change": "-3%", "category": "Салаты"},
      {"name": "Плов узбекский", "orders": 1150, "change": "+15%", "category": "Вторые блюда"},
      {"name": "Компот из сухофруктов", "orders": 1100, "change": "+5%", "category": "Напитки"}
    ]
  },
  "menu": {
    "categories": ["Все", "Первые блюда", "Вторые блюда", "Салаты", "Напитки", "Десерты"],
    "dishes": [
      {"id": 1, "name": "Борщ", "category": "Первые блюда", "price": 150, "cost": 85, "popularity": 95, "rating": 4.6, "calories": 280},
      {"id": 2, "name": "Солянка мясная", "category": "Первые блюда", "price": 170, "cost": 95, "popularity": 78, "rating": 4.3, "calories": 320},
      {"id": 3, "name": "Куриная котлета с пюре", "category": "Вторые блюда", "price": 220, "cost": 120, "popularity": 88, "rating": 4.4, "calories": 450},
      {"id": 4, "name": "Плов узбекский", "category": "Вторые блюда", "price": 200, "cost": 110, "popularity": 82, "rating": 4.5, "calories": 520},
      {"id": 5, "name": "Рыба запеченная", "category": "Вторые блюда", "price": 250, "cost": 140, "popularity": 65, "rating": 4.1, "calories": 380},
      {"id": 6, "name": "Салат Цезарь", "category": "Салаты", "price": 180, "cost": 95, "popularity": 78, "rating": 4.3, "calories": 290},
      {"id": 7, "name": "Салат Оливье", "category": "Салаты", "price": 160, "cost": 85, "popularity": 92, "rating": 4.2, "calories": 310},
      {"id": 8, "name": "Компот из сухофруктов", "category": "Напитки", "price": 50, "cost": 25, "popularity": 85, "rating": 4.1, "calories": 80},
      {"id": 9, "name": "Чай", "category": "Напитки", "price": 30, "cost": 15, "popularity": 95, "rating": 4.0, "calories": 5},
      {"id": 10, "name": "Говядина по-бургундски", "category": "Вторые блюда", "price": 300, "cost": 280, "popularity": 27, "rating": 4.0, "calories": 155},
      {"id": 11, "name": "Суп том-ям", "category": "Первые блюда", "price": 120, "cost": 110, "popularity": 30, "rating": 4.0, "calories": 110},
      {"id": 12, "name": "Тирамису", "category": "Десерты", "price": 100, "cost": 95, "popularity": 31, "rating": 4.0, "calories": 330},
      {"id": 13, "name": "Салат с креветками", "category": "Салаты", "price": 200, "cost": 180, "popularity": 35, "rating": 4.0, "calories": 140},
      {"id": 14, "name": "Стейк из лосося", "category": "Вторые блюда", "price": 480, "cost": 420, "popularity": 35, "rating": 4.0, "calories": 210}
    ]
  },
  "customers": {
    "demographics": {
      "ageGroups": {"20-30": 35, "31-40": 28, "41-50": 22, "51-60": 15},
      "departments": {"IT": 32, "Бухгалтерия": 18, "Менеджмент": 15, "Производство": 25, "HR": 10},
      "loyaltySegments": {"VIP": 15, "Постоянные": 45, "Регулярные": 30, "Новые": 10}
    },
    "behaviorPatterns": [
            {
                "department": "IT отдел",
                "percentage": 32,
                "averageCheck": 380,
                "frequency": 3.2,
                "preferences": ["Здоровое питание", "Кофе", "Быстрые обеды"],
                "peakHours": ["11:30-12:30", "13:00-14:00"],
                "trend": "up"
            },
            {
                "department": "Бухгалтерия", 
                "percentage": 18,
                "averageCheck": 290,
                "frequency": 4.1,
                "preferences": ["Кофе", "Десерты", "Супы"],
                "peakHours": ["12:00-13:00"],
                "trend": "stable"
            },
            {
                "department": "Менеджмент",
                "percentage": 15,
                "averageCheck": 450,
                "frequency": 2.8,
                "preferences": ["Бизнес-ланчи", "Премиум блюда", "Кофе"],
                "peakHours": ["13:00-14:00"],
                "trend": "up"
            },
            {
                "department": "Производство",
                "percentage": 25,
                "averageCheck": 270,
                "frequency": 4.5,
                "preferences": ["Сытные блюда", "Гарниры", "Компоты"],
                "peakHours": ["11:00-12:00", "14:00-15:00"],
                "trend": "stable"
            },
            {
                "department": "HR",
                "percentage": 10,
                "averageCheck": 310,
                "frequency": 3.8,
                "preferences": ["Салаты", "Легкие закуски", "Чай"],
                "peakHours": ["12:30-13:30"],
                "trend": "down"
            }
        ],
  },
  "forecasts": {
   


  },
  "aiInsights": [
    {
      "type": "recommendation",
      "title": "Скорректировать цены 3-х самых проблемных блюд",
      "description": "Стейк из лосося → 560₽ (+80₽), Суп том-ям → 150₽ (+30₽), Говядина по-бургундски → 380₽ (+80₽). Это повысит маржу до 25-27% без потери спроса",
      "impact": "Рост прибыли: +64,300₽/мес",
      "confidence": 89,
      "status": "new"
    },
    {
      "type": "optimization",
      "title": "Найти новых поставщиков для морепродуктов",
      "description": "Стейк из лосося и салат с креветками имеют высокую себестоимость. Анализ 3-х альтернативных поставщиков может снизить затраты на 15%",
      "impact": "Экономия: +18,000₽/мес",
      "confidence": 85,
      "status": "pending"
    },
    {
      "type": "cost_reduction",
      "title": "Заменить говядину по-бургундски на более рентабельное блюдо",
      "description": "Маржа 6.7% при 200 заказах/мес - самый низкий показатель. Блюдо-замена с маржой 25% принесет дополнительно 16,000₽/мес",
      "impact": "Рост прибыли: +16,000₽/мес",
      "confidence": 91,
      "status": "new"
    }
  ]
};

// Данные для сети ресторанов
const networkData = {
  mainAccount: {
    name: "Столовая ГУУ",
    subscription: "premium",
    maxLocations: 5,
    currentLocations: 3
  },
  locations: [
    {
      id: 1,
      name: "Главный корпус, 8 этаж",
      type: "restaurant",
      address: "Рязанский проспект, 99, стр. 8",
      revenue: 125000,
      status: "online",
      active: true,
      icon: "🍽️"
    },
  ]
};


// Глобальные переменные для графиков
let charts = {};
let currentFilter = 'Все';

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  loadSavedTheme();
  
  initAuthSystem(); // ← ДОБАВИТЬ ПЕРВОЙ СТРОКОЙ
  initAnalyticsManager();
  initNavigation();
  initThemeToggle();
  // initProfileDropdown();
  initMetricCounters();
  initTopDishes();
  initCharts();
  initMenuPage();
  initAIPage();
  initModal();
  initChat();
});

// Навигация
// В обработчике навигации добавьте:
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Проверяем авторизацию
      if (!currentUser) {
        showAuthModal();
        return;
      }
      
      const targetPage = this.dataset.page;
      
      navLinks.forEach(l => l.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));
      
      this.classList.add('active');
      document.getElementById(targetPage).classList.add('active');
      
      // Инициализируем специфичные для страницы элементы
      setTimeout(() => {
        initChartsForPage(targetPage);
        
        switch(targetPage) {
          case 'overview':
            initMetricCounters();
            initTopDishes();
            break;
          case 'menu':
            initMenuPage();
            break;
          case 'customers':
            initCustomerMetrics();
            renderBehaviorPatterns(); // ← Добавьте вызов
            break;
          case 'ai':
            initAIPage();
            break;
        }
      }, 100);
    });
  });
}

// Профиль dropdown
function initProfileDropdown() {
  const profileButton = document.getElementById('profileButton');
  const profileDropdown = document.getElementById('profileDropdown');
  const dropdownItems = document.querySelectorAll('.dropdown-item[data-page]');
  const logoutButton = document.getElementById('logoutButton');
  
  // Переключение видимости dropdown
  profileButton.addEventListener('click', function(e) {
    e.stopPropagation();
    profileDropdown.classList.toggle('hidden');
  });
  
  // Закрытие dropdown при клике вне его
  document.addEventListener('click', function(e) {
    if (!profileButton.contains(e.target) && !profileDropdown.contains(e.target)) {
      profileDropdown.classList.add('hidden');
    }
  });
  
  // Обработка кликов по пунктам меню
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetPage = this.dataset.page;
      
      // Скрываем dropdown
      profileDropdown.classList.add('hidden');
      
      // Переключаемся на нужную страницу
      const navLinks = document.querySelectorAll('.nav-link');
      const pages = document.querySelectorAll('.page');
      
      navLinks.forEach(l => l.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));
      
      document.getElementById(targetPage).classList.add('active');
      
      // Инициализируем графики для активной страницы
      setTimeout(() => initChartsForPage(targetPage), 100);
    });
  });
  
  // Обработка выхода
  logoutButton.addEventListener('click', function() {
    alert('Выход из системы');
    profileDropdown.classList.add('hidden');
  });
}

    // Обновление цветов графиков для текущей темы
function updateChartColors() {
  const isDarkTheme = document.body.classList.contains('dark-theme');
  const textColor = isDarkTheme ? '#ffffff' : '#374151';
  const gridColor = isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.15)';
  
  Chart.defaults.color = textColor;
  Chart.defaults.borderColor = gridColor;
  
  // Перерисовываем все активные графики
  Object.values(charts).forEach(chart => {
    if (chart && typeof chart.update === 'function') {
      chart.update();
    }
  });
}

// Переключение темы
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggleSetting');
  const body = document.body;
  
  // Устанавливаем начальное состояние переключателя
  if (body.classList.contains('dark-theme')) {
    themeToggle.checked = true;
  } else {
    themeToggle.checked = false;
  }
  
  // Обработчик изменения темы
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      // Включаем темную тему
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      // Включаем светлую тему
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
    
    // Обновляем все графики
    setTimeout(() => {
      Object.values(charts).forEach(chart => {
        if (chart) chart.destroy();
      });
      charts = {};
      
      initCharts();
      const activePage = document.querySelector('.page.active').id;
      initChartsForPage(activePage);
    }, 100);
  });
}

// Добавляем функцию для загрузки сохраненной темы
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  
  if (savedTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    // По умолчанию темная тема
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
}


// Анимация счетчиков метрик
function initMetricCounters() {
  const counters = document.querySelectorAll('.metric-value');
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.value);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += step;
        if (target >= 1000) {
          counter.textContent = Math.floor(current).toLocaleString();
        } else {
          counter.textContent = Math.floor(current * 10) / 10;
        }
        requestAnimationFrame(updateCounter);
      } else {
        if (target >= 1000) {
          counter.textContent = target.toLocaleString();
        } else {
          counter.textContent = target;
        }
      }
    };
    
    setTimeout(updateCounter, 500);
  });
}

// Топ блюд
function initTopDishes() {
  const container = document.getElementById('topDishes');
  const dishes = appData.analytics.topDishes;
  
  container.innerHTML = dishes.map((dish, index) => `
    <div class="popular-dish-item">
      <div class="popular-dish-header">
        <span class="popular-rank">#${index + 1}</span>
        <span class="popular-name">${dish.name}</span>
        <span class="popular-orders">${dish.orders} заказов</span>
      </div>
      <div class="popular-dish-details">
        <div class="popular-category">${dish.category}</div>
        <div class="popular-change ${dish.change.startsWith('+') ? 'positive' : 'negative'}">${dish.change}</div>
      </div>
    </div>
  `).join('');

  initDishesPeriodSelector(); // Инициализируем селектор периода
  updateTopDishes('month');   // Показываем данные за месяц по умолчанию
}

// Инициализация графиков
function initCharts() {
  // Устанавливаем глобальные настройки Chart.js
  const isDarkTheme = document.body.classList.contains('dark-theme');
  const textColor = isDarkTheme ? '#ffffff' : getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
  const gridColor = isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  
  Chart.defaults.color = textColor;
  Chart.defaults.borderColor = gridColor;
  Chart.defaults.backgroundColor = 'rgba(139, 92, 246, 0.1)';
  
// Обновляем цвета перед созданием графиков
  updateChartColors();

  // Создаем тепловую карту (имитация через bar chart)
  createHeatmapChart();
  
  // Создаем график продаж
  createLossMakersChart();
}

function initChartsForPage(page) {
  switch(page) {
    case 'overview':
      if (!charts.heatmapChart) createHeatmapChart();
      if (!charts.salesChart) createLossMakersChart();
      break;
      
    case 'menu':
      if (!charts.scatterChart) createScatterChart();
      break;
      
    case 'customers':
    if (!charts.valueSegmentationChart) createValueSegmentationChart();
    if (!charts.customerDynamicsChart) createCustomerDynamicsChart();
    renderBehaviorPatterns(); // ← Добавьте эту строку
    break;
      
    case 'forecasts':
      
    case 'ai':
      // Для страницы ИИ графики не нужны, только рендер инсайтов
      renderAIInsights();
      break;
      
    case 'settings':
      // Для настроек графики не нужны
      break;
      
    case 'profile':
      // Для профиля графики не нужны
      break;
  }
  
  // Обновляем цвета графиков при переключении страниц
  updateChartColors();
}

function createHeatmapChart() {
  const ctx = document.getElementById('heatmapChart');
  if (!ctx) return;
  
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const hours = Array.from({length: 24}, (_, i) => i);
  
  // Преобразуем данные тепловой карты в формат для bar chart
  const datasets = [];
  for (let day = 1; day < appData.analytics.hourlyHeatmap.length; day++) {
    datasets.push({
      label: days[day],
      data: appData.analytics.hourlyHeatmap[day],
      backgroundColor: `hsla(${day * 50}, 70%, 60%, 0.7)`,
      borderColor: `hsla(${day * 50}, 70%, 60%, 1)`,
      borderWidth: 1
    });
  }
  
  charts.heatmapChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: hours,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y} посетителей`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Час дня'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Количество посетителей'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    }
  });
}

function createLossMakersChart() {
  const ctx = document.getElementById('salesChart');
  if (!ctx) return;
  
  const lowMarginDishes = appData.analytics.topLowMarginDishes;
  
  if (charts.salesChart) {
    charts.salesChart.destroy();
  }
  
  const container = ctx.parentElement;
  container.innerHTML = `
    <div class="loss-makers-list">
      ${lowMarginDishes.map((item, index) => `
        <div class="loss-maker-item">
          <div class="loss-maker-header">
            <span class="loss-rank">#${index + 1}</span>
            <span class="loss-name">${item.name}</span>
            <span class="loss-amount">Маржа: ${item.margin}%</span>
          </div>
          <div class="loss-details">
            <div class="loss-cost">Себестоимость: ${item.cost}₽</div>
            <div class="loss-price">Цена: ${item.price}₽</div>
            <div class="loss-per-portion">Прибыль/порция: ${item.profitPerPortion}₽</div>
            <div class="loss-reason">Проблема: ${item.reason}</div>
            <div class="loss-orders">Заказов: ${item.orders}</div>
            <div class="loss-potential">Потенциал: +${item.potentialMonthlyProfit - item.monthlyProfit}₽/мес</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function createScatterChart() {
  const ctx = document.getElementById('scatterChart');
  if (!ctx) return;
  
  const dishes = appData.menu.dishes;
  
  charts.scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Блюда',
        data: dishes.map(dish => ({
          x: dish.popularity,
          y: ((dish.price - dish.cost) / dish.price) * 100,
          dish: dish
        })),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454'],
        borderColor: '#ffffff',
        borderWidth: 2,
        pointRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const dish = context.raw.dish;
              return [
                dish.name,
                `Популярность: ${context.parsed.x}%`,
                `Маржинальность: ${context.parsed.y.toFixed(1)}%`,
                `Цена: ${dish.price}₽`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Популярность (%)'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Маржинальность (%)'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    }
  });
}

// Графики для демографии (если хотите оставить старые)
function createAgeChart() {
  const ctx = document.getElementById('ageChart');
  if (!ctx) return;
  
  const ageData = appData.customers.demographics.ageGroups;
  
  charts.ageChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(ageData),
      datasets: [{
        data: Object.values(ageData),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function createDepartmentChart() {
  const ctx = document.getElementById('departmentChart');
  if (!ctx) return;
  
  const deptData = appData.customers.demographics.departments;
  
  charts.departmentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(deptData),
      datasets: [{
        label: 'Сотрудники (%)',
        data: Object.values(deptData),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });
}

function createLoyaltyChart() {
  const ctx = document.getElementById('loyaltyChart');
  if (!ctx) return;
  
  const loyaltyData = appData.customers.demographics.loyaltySegments;
  
  charts.loyaltyChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(loyaltyData),
      datasets: [{
        data: Object.values(loyaltyData),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Страница меню
function initMenuPage() {
  initCategoryFilters();
  renderMenuGrid();
}

function initCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  const categories = appData.menu.categories;
  
  container.innerHTML = categories.map(category => `
    <div class="filter-chip ${category === 'Все' ? 'active' : ''}" data-category="${category}">
      ${category}
      ${category !== 'Все' ? '<span class="delete-category" onclick="deleteCategory(event, \'' + category + '\')">×</span>' : ''}
    </div>
  `).join('');
  
  container.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-chip')) {
      // Убираем активный класс у всех фишек
      container.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
      
      // Добавляем активный класс к выбранной фишке
      e.target.classList.add('active');
      
      // Обновляем фильтр
      currentFilter = e.target.dataset.category;
      renderMenuGrid();
    }
  });
}

function deleteCategory(event, categoryName) {
  event.stopPropagation(); // Предотвращаем срабатывание клика по фильтру
  
  if (confirm(`Удалить категорию "${categoryName}"? Блюда из этой категории будут перемещены в "Все".`)) {
    // Удаляем категорию из списка
    appData.menu.categories = appData.menu.categories.filter(cat => cat !== categoryName);
    
    // Перемещаем блюда этой категории в "Все"
    appData.menu.dishes.forEach(dish => {
      if (dish.category === categoryName) {
        dish.category = 'Все';
      }
    });
    
    // Перерисовываем фильтры и сетку
    initCategoryFilters();
    renderMenuGrid();
    
    showNotification(`Категория "${categoryName}" удалена!`);
  }
}

function renderMenuGrid() {
  const container = document.getElementById('menuGrid');
  let dishes = appData.menu.dishes;
  
  if (currentFilter !== 'Все') {
    dishes = dishes.filter(dish => dish.category === currentFilter);
  }
  
  let gridHTML = `
    <div class="dish-card add-dish-card" onclick="openAddDishModal()">
      <div class="add-dish-content">
        <div class="add-icon">+</div>
        <h4>Добавить блюдо</h4>
        <p>Создать новую позицию меню</p>
      </div>
    </div>
  `;
  
  gridHTML += dishes.map(dish => `
    <div class="dish-card" data-dish-id="${dish.id}">
      <!-- Кнопка меню -->
      <button class="dish-menu-button">⋯</button>
      
      <!-- Выпадающее меню -->
      <div class="dish-dropdown hidden">
        <div class="dropdown-menu-item" onclick="editDish(${dish.id})">
          <span>✏️</span>
          Редактировать
        </div>
        <div class="dropdown-menu-item delete" onclick="deleteDish(${dish.id})">
          <span>🗑️</span>
          Удалить
        </div>
        <div class="dropdown-menu-item" onclick="duplicateDish(${dish.id})">
          <span>📋</span>
          Дублировать
        </div>
      </div>
      
      <!-- Остальное содержимое карточки -->
      <h4>${dish.name}</h4>
      <div class="dish-price">${dish.price}₽</div>
      <div class="dish-metrics">
        <div class="metric">
          <span class="metric-number">${dish.popularity}%</span>
          <span class="metric-text">Популярность</span>
        </div>
        <div class="metric">
          <span class="metric-number">${dish.calories}</span>
          <span class="metric-text">Ккал</span>
        </div>
      </div>
      <div class="popularity-bar">
        <div class="popularity-fill" style="width: ${dish.popularity}%"></div>
      </div>
    </div>
  `).join('');

  container.innerHTML = gridHTML;
  
  // Инициализируем меню после рендера
  initDishCardMenus();
  
  // Умный обработчик кликов - открывает детальную карточку только при клике на саму карточку, не на кнопки
  container.addEventListener('click', function(e) {
    const dishCard = e.target.closest('.dish-card');
    
    // Если клик не на карточке или на карточке добавления - выходим
    if (!dishCard || dishCard.classList.contains('add-dish-card')) return;
    
    // Если клик был на кнопке меню или внутри выпадающего меню - не открываем детальную карточку
    if (e.target.closest('.dish-menu-button') || e.target.closest('.dish-dropdown')) {
      return;
    }
    
    // Если клик был на самой карточке (не на кнопках) - открываем детальную карточку
    const dishId = parseInt(dishCard.dataset.dishId);
    showDishModal(dishId);
  });
}

// Модальное окно
function initModal() {
  const modal = document.getElementById('dishModal');
  const closeBtn = document.getElementById('closeModal');
  const backdrop = modal.querySelector('.modal-backdrop');
  
  [closeBtn, backdrop].forEach(element => {
    element.addEventListener('click', closeDishModal);
  });
}

function showDishModal(dishId) {
  const dish = appData.menu.dishes.find(d => d.id === dishId);
  if (!dish) return;
  
  const modal = document.getElementById('dishModal');
  const nameEl = document.getElementById('modalDishName');
  const detailsEl = document.getElementById('dishDetails');
  
  nameEl.textContent = dish.name;
  
  const profit = dish.price - dish.cost;
  const margin = (profit / dish.price * 100).toFixed(1);
  
  detailsEl.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div>
        <strong>Категория:</strong><br>
        ${dish.category}
      </div>
      <div>
        <strong>Цена:</strong><br>
        ${dish.price}₽
      </div>
      <div>
        <strong>Себестоимость:</strong><br>
        ${dish.cost}₽
      </div>
      <div>
        <strong>Прибыль:</strong><br>
        ${profit}₽
      </div>
      <div>
        <strong>Маржинальность:</strong><br>
        ${margin}%
      </div>
    </div>
    <div style="margin-bottom: 1rem;">
      <strong>Популярность: ${dish.popularity}%</strong>
      <div class="popularity-bar" style="margin-top: 0.5rem;">
        <div class="popularity-fill" style="width: ${dish.popularity}%"></div>
      </div>
    </div>
    <div>
      <strong>Калорийность:</strong> ${dish.calories} ккал
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function closeDishModal() {
  const modal = document.getElementById('dishModal');
  modal.classList.add('hidden');
}

// ИИ страница
function initAIPage() {
  renderAIInsights();
}

function renderAIInsights() {
  const container = document.getElementById('aiInsights');
  const insights = appData.aiInsights;
  
  container.innerHTML = insights.map((insight, index) => `
    <div class="insight-card ${insight.type}">
      <div class="insight-header">
        <div class="insight-title">${insight.title}</div>
        <div class="insight-status status-${insight.status}">${getStatusText(insight.status)}</div>
      </div>
      <div class="insight-description">${insight.description}</div>
      <div class="insight-footer">
        <div class="insight-impact">${insight.impact}</div>
        <div class="confidence-bar">
          <div class="confidence-fill">
            <div class="confidence-progress" style="width: ${insight.confidence}%"></div>
          </div>
          <span>${insight.confidence}%</span>
        </div>
      </div>
      <button class="apply-recommendation" data-insight-index="${index}" ${insight.status === 'applied' ? 'disabled' : ''}>
        ${insight.status === 'applied' ? 'Рекомендация применена' : 'Применить рекомендацию'}
      </button>
    </div>
  `).join('');
  
  // Добавляем обработчики для кнопок
  container.addEventListener('click', function(e) {
    if (e.target.classList.contains('apply-recommendation') && !e.target.disabled) {
      const insightIndex = parseInt(e.target.dataset.insightIndex);
      applyRecommendation(insightIndex, e.target);
    }
  });
}

function applyRecommendation(index, button) {
  const insight = appData.aiInsights[index];
  
  // Имитация применения рекомендации
  button.disabled = true;
  button.textContent = 'Применение...';
  
  setTimeout(() => {
    // ОБНОВЛЕННЫЙ КОД: Применяем изменения цен для первой рекомендации
    if (index === 0) { // Первая рекомендация
      applyPriceChanges();
    }
    
    // Обновляем статус в данных
    appData.aiInsights[index].status = 'applied';
    
    // Обновляем кнопку
    button.textContent = 'Рекомендация применена';
    
    // Обновляем статус в карточке
    const card = button.closest('.insight-card');
    const statusElement = card.querySelector('.insight-status');
    statusElement.className = 'insight-status status-applied';
    statusElement.textContent = 'Применено';
    
    // Показываем уведомление
    showNotification(`Рекомендация "${insight.title}" успешно применена!`);
  }, 2000);
}

// НОВАЯ ФУНКЦИЯ: Применение изменений цен
function applyPriceChanges() {
  // Находим блюда в меню и обновляем цены
  const dishes = appData.menu.dishes;
  
  // Стейк из лосося: 480₽ → 560₽
  const salmonSteak = dishes.find(dish => dish.name === "Стейк из лосося");
  if (salmonSteak) {
    salmonSteak.price = 560;
  }
  
  // Суп том-ям: 120₽ → 150₽
  const tomYum = dishes.find(dish => dish.name === "Суп том-ям");
  if (tomYum) {
    tomYum.price = 150;
  }
  
  // Говядина по-бургундски: 300₽ → 380₽
  const beefBurgundy = dishes.find(dish => dish.name === "Говядина по-бургундски");
  if (beefBurgundy) {
    beefBurgundy.price = 380;
  }
  
  // Также обновляем данные в аналитике низкомаржинальных блюд
  const lowMarginDishes = appData.analytics.topLowMarginDishes;
  
  // Обновляем стейк из лосося в аналитике
  const analyticsSalmon = lowMarginDishes.find(item => item.name === "Стейк из лосося");
  if (analyticsSalmon) {
    analyticsSalmon.price = 560;
    analyticsSalmon.profitPerPortion = 560 - analyticsSalmon.cost; // 560 - 420 = 140
    analyticsSalmon.margin = ((560 - analyticsSalmon.cost) / 560 * 100).toFixed(1); // (140/560)*100 = 25%
  }
  
  // Обновляем суп том-ям в аналитике
  const analyticsTomYum = lowMarginDishes.find(item => item.name === "Суп том-ям");
  if (analyticsTomYum) {
    analyticsTomYum.price = 150;
    analyticsTomYum.profitPerPortion = 150 - analyticsTomYum.cost; // 150 - 110 = 40
    analyticsTomYum.margin = ((150 - analyticsTomYum.cost) / 150 * 100).toFixed(1); // (40/150)*100 = 26.7%
  }
  
  // Обновляем говядину по-бургундски в аналитике
  const analyticsBeef = lowMarginDishes.find(item => item.name === "Говядина по-бургундски");
  if (analyticsBeef) {
    analyticsBeef.price = 380;
    analyticsBeef.profitPerPortion = 380 - analyticsBeef.cost; // 380 - 280 = 100
    analyticsBeef.margin = ((380 - analyticsBeef.cost) / 380 * 100).toFixed(1); // (100/380)*100 = 26.3%
  }
  
  // Перерисовываем интерфейс, если активна страница меню
  if (document.getElementById('menu').classList.contains('active')) {
    renderMenuGrid();
  }
  
  // Обновляем график убыточных позиций, если активна страница обзора
  if (document.getElementById('overview').classList.contains('active')) {
    createLossMakersChart();
  }
  
  console.log('Цены успешно обновлены:', {
    salmonSteak: salmonSteak?.price,
    tomYum: tomYum?.price,
    beefBurgundy: beefBurgundy?.price
  });
}

// Функция для показа модального окна сводной аналитики
function showNetworkAnalyticsModal() {
  const modalHtml = `
    <div class="modal" id="networkAnalyticsModal">
      <div class="modal-backdrop" onclick="closeNetworkAnalyticsModal()"></div>
      <div class="modal-content" style="max-width: 800px;">
        <div class="modal-header">
          <h3>📊 Сводная аналитика по сети</h3>
          <button class="modal-close" onclick="closeNetworkAnalyticsModal()">×</button>
        </div>
        <div class="modal-body">
          <div class="network-metrics">
            <div class="metrics-grid" style="grid-template-columns: repeat(2, 1fr);">
              <div class="metric-card">
                <div class="metric-icon">🏢</div>
                <div class="metric-content">
                  <h3 class="metric-value">${networkData.locations.length}</h3>
                  <p class="metric-label">Всего точек</p>
                </div>
              </div>
              <div class="metric-card">
                <div class="metric-icon">💰</div>
                <div class="metric-content">
                  <h3 class="metric-value">${formatNumber(networkData.locations.reduce((sum, loc) => sum + loc.revenue, 0))}</h3>
                  <p class="metric-label">Общая выручка/мес</p>
                </div>
              </div>
            </div>
            
            <div class="locations-comparison">
              <h4>Сравнение точек</h4>
              <div class="comparison-list">
                ${networkData.locations.map(location => `
                  <div class="comparison-item ${location.active ? 'active' : ''}">
                    <div class="location-info">
                      <span class="location-name">${location.name}</span>
                      <span class="location-revenue">${formatNumber(location.revenue)}₽</span>
                    </div>
                    <div class="location-status ${location.status}">
                      ${location.status === 'online' ? '🟢' : '🔴'}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="network-insights">
              <h4>Ключевые инсайты</h4>
              <div class="insight-item">
                <span class="insight-badge recommendation">Рекомендация</span>
                <strong>Самая прибыльная точка:</strong> 
                ${networkData.locations.reduce((max, loc) => loc.revenue > max.revenue ? loc : max).name}
              </div>
              <div class="insight-item">
                <span class="insight-badge info">Инфо</span>
                <strong>Общая посещаемость:</strong> ~${formatNumber(2500)} человек/мес
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeNetworkAnalyticsModal() {
  const modal = document.getElementById('networkAnalyticsModal');
  if (modal) {
    modal.remove();
  }
}

function openNetworkSettings() {
  // Теперь перенаправляем в обычные настройки
  openSettings();
}
// Функция для показа модального окна сводной аналитики
function showNetworkAnalyticsModal() {
  // Сначала закрываем предыдущее модальное окно, если оно есть
  closeNetworkAnalyticsModal();
  
  const modalHtml = `
    <div class="modal" id="networkAnalyticsModal">
      <div class="modal-backdrop" onclick="closeNetworkAnalyticsModal()"></div>
       <div class="modal-content" style="max-width: 900px; height: 85vh; margin-top: 0vh; max-height: 600px;">
        <div class="modal-header">
          <h3>📊 Сводная аналитика по сети</h3>
          <button class="modal-close" onclick="closeNetworkAnalyticsModal()">×</button>
        </div>
        <div class="modal-body">
          <div class="network-metrics">
            <div class="metrics-grid" style="grid-template-columns: repeat(2, 1fr); margin-bottom: 2rem;">
              <div class="metric-card">
                <div class="metric-icon">🏢</div>
                <div class="metric-content">
                  <h3 class="metric-value">${networkData.locations.length}</h3>
                  <p class="metric-label">Всего точек</p>
                </div>
              </div>
              <div class="metric-card">
                <div class="metric-icon">💰</div>
                <div class="metric-content">
                  <h3 class="metric-value">${formatNumber(networkData.locations.reduce((sum, loc) => sum + loc.revenue, 0))}</h3>
                  <p class="metric-label">Общая выручка/мес</p>
                </div>
              </div>
            </div>
            
            <div class="locations-comparison">
              <h4 style="margin-bottom: 1rem;">Сравнение точек</h4>
              <div class="comparison-list">
                ${networkData.locations.map(location => `
                  <div class="comparison-item ${location.active ? 'active' : ''}">
                    <div class="location-info">
                      <span class="location-name">${location.name}</span>
                      <span class="location-revenue">${formatNumber(location.revenue)}₽/мес</span>
                    </div>
                    <div class="location-status ${location.status}">
                      ${location.status === 'online' ? '🟢 Online' : '🔴 Offline'}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="network-insights" style="margin-top: 2rem;">
              <h4 style="margin-bottom: 1rem;">Ключевые инсайты</h4>
              <div class="insight-item" style="background: rgba(139, 92, 246, 0.1); padding: 0.75rem; border-radius: 8px; margin-bottom: 0.5rem;">
                <span class="insight-badge" style="background: #8b5cf6; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-right: 0.5rem;">Рекомендация</span>
                <strong>Самая прибыльная точка:</strong> 
                ${networkData.locations.reduce((max, loc) => loc.revenue > max.revenue ? loc : max, networkData.locations[0]).name}
              </div>
              <div class="insight-item" style="background: rgba(6, 182, 212, 0.1); padding: 0.75rem; border-radius: 8px;">
                <span class="insight-badge" style="background: #06b6d4; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; margin-right: 0.5rem;">Инфо</span>
                <strong>Общая посещаемость:</strong> ~${formatNumber(2500)} человек/мес
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeNetworkAnalyticsModal() {
  const modal = document.getElementById('networkAnalyticsModal');
  if (modal) {
    modal.remove();
  }
}

// Обновим функцию showNotification для поддержки типов сообщений
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'error' ? '#ef4444' : 'linear-gradient(45deg, #8b5cf6, #06b6d4)'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
    max-width: 300px;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
function getStatusText(status) {
  const statusMap = {
    'new': 'Новый',
    'applied': 'Применено',
    'pending': 'Ожидает'
  };
  return statusMap[status] || status;
}

// Чат с ИИ
function initChat() {
  const sendButton = document.getElementById('sendMessage');
  const chatInput = document.getElementById('chatInput');
  
  sendButton.addEventListener('click', sendChatMessage);
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendChatMessage();
    }
  });
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const messagesContainer = document.getElementById('chatMessages');
  const message = input.value.trim();
  
  if (!message) return;
  
  // Добавляем сообщение пользователя
  const userMessage = document.createElement('div');
  userMessage.className = 'message user-message';
  userMessage.innerHTML = `<div class="message-content">${message}</div>`;
  messagesContainer.appendChild(userMessage);
  
  // Очищаем поле ввода
  input.value = '';
  
  // Имитируем ответ ИИ
  setTimeout(() => {
    const aiResponse = generateAIResponse(message);
    const aiMessage = document.createElement('div');
    aiMessage.className = 'message ai-message';
    aiMessage.innerHTML = `<div class="message-content">${aiResponse}</div>`;
    messagesContainer.appendChild(aiMessage);
    
    // Прокручиваем к последнему сообщению
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1000);
  
  // Прокручиваем к последнему сообщению
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(userMessage) {
  const responses = [
    "На основе анализа данных, рекомендую увеличить производство популярных блюд в пиковые часы.",
    "Статистика показывает, что добавление веганских опций может увеличить выручку на 15%.",
    "Анализ показывает оптимальное время подачи основных блюд: 11:30-12:00.",
    "Рекомендую пересмотреть размеры порций менее популярных блюд для снижения отходов.",
    "Данные указывают на высокий спрос на здоровое питание среди сотрудников IT отдела."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

// Утилиты
function formatNumber(num) {
  return num.toLocaleString('ru-RU');
}

// Добавляем CSS для анимации уведомления
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(style);








// Добавьте эту функцию в app.js
function initDishCardMenus() {
  const dishCards = document.querySelectorAll('.dish-card');
  
  dishCards.forEach(card => {
    const menuButton = card.querySelector('.dish-menu-button');
    const dropdown = card.querySelector('.dish-dropdown');
    
    if (menuButton && dropdown) {
      menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });
    }
  });
  
  // Закрытие меню при клике вне его
  document.addEventListener('click', function() {
    document.querySelectorAll('.dish-dropdown').forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
  });
}

// Функция для удаления блюда
function deleteDish(dishId) {
  if (confirm('Вы уверены, что хотите удалить это блюдо из меню?')) {
    // Удаляем блюдо из данных
    appData.menu.dishes = appData.menu.dishes.filter(dish => dish.id !== dishId);
    
    // Закрываем выпадающее меню
    document.querySelectorAll('.dish-dropdown').forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
    
    // Обновляем интерфейс
    renderMenuGrid();
    showNotification('Блюдо удалено из меню');
  }
}

// Функция редактирования блюда
function editDish(dishId) {
  const dish = appData.menu.dishes.find(d => d.id === dishId);
  if (!dish) return;
  
  // Закрываем выпадающее меню
  document.querySelectorAll('.dish-dropdown').forEach(dropdown => {
    dropdown.classList.add('hidden');
  });
  
  // Открываем модальное окно редактирования
  openEditModal(dish);
}

// Функция дублирования блюда
function duplicateDish(dishId) {
  const originalDish = appData.menu.dishes.find(d => d.id === dishId);
  if (!originalDish) return;
  
  // Создаем копию с новым ID
  const newDish = {
    ...originalDish,
    id: Math.max(...appData.menu.dishes.map(d => d.id)) + 1,
    name: `${originalDish.name} (копия)`
  };
  
  // Добавляем в данные
  appData.menu.dishes.push(newDish);
  
  // Перерисовываем сетку
  renderMenuGrid();
  
  // Закрываем выпадающее меню
  document.querySelectorAll('.dish-dropdown').forEach(dropdown => {
    dropdown.classList.add('hidden');
  });
  
  showNotification('Блюдо дублировано');
}


// Функция открытия модального окна редактирования
function openEditModal(dish) {
  const modalHtml = `
    <div class="modal" id="editDishModal">
      <div class="modal-backdrop" onclick="closeEditModal()"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>Редактирование: ${dish.name}</h3>
          <button class="modal-close" onclick="closeEditModal()">×</button>
        </div>
        <div class="modal-body">
          <form id="editDishForm" class="edit-form">
            <div class="form-group">
              <label class="form-label">Название блюда</label>
              <input type="text" class="form-control" name="name" value="${dish.name}" required>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Цена (₽)</label>
                <input type="number" class="form-control no-spinner" name="price" value="${dish.price}" min="1" required onkeydown="return event.keyCode !== 38 && event.keyCode !== 40">
              </div>
              <div class="form-group">
                <label class="form-label">Себестоимость (₽)</label>
                <input type="number" class="form-control no-spinner" name="cost" value="${dish.cost}" min="1" required onkeydown="return event.keyCode !== 38 && event.keyCode !== 40">
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Калорийность</label>
                <input type="number" class="form-control no-spinner" name="calories" value="${dish.calories}" min="1" required onkeydown="return event.keyCode !== 38 && event.keyCode !== 40">
              </div>
              <div class="form-group">
                <label class="form-label">Категория</label>
                <select class="form-control" name="category" required>
                  ${appData.menu.categories.filter(cat => cat !== 'Все').map(cat => 
                    `<option value="${cat}" ${cat === dish.category ? 'selected' : ''}>${cat}</option>`
                  ).join('')}
                </select>
              </div>
            </div>
            
            <!-- Информация о автоматическом расчете -->
            <div class="auto-calculation-info">
              <div class="info-text">
                <strong>Рейтинг и популярность</strong> рассчитываются автоматически 
                ИИ-системой на основе предпочтений клиентов и статистики заказов
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn btn--outline" onclick="closeEditModal()">Отмена</button>
              <button type="submit" class="btn btn--primary">Сохранить изменения</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.getElementById('editDishForm').addEventListener('submit', (e) => saveDishChanges(e, dish.id));
}


// Функция сохранения изменений блюда
function saveDishChanges(e, dishId) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  // Обновляем данные в appData
  const dish = appData.menu.dishes.find(d => d.id === dishId);
  if (dish) {
    dish.name = formData.get('name');
    dish.price = parseInt(formData.get('price'));
    dish.cost = parseInt(formData.get('cost'));
    dish.calories = parseInt(formData.get('calories'));
    dish.category = formData.get('category');
  }
  
  // Перерисовываем сетку меню
  renderMenuGrid();
  
  // Закрываем модальное окно редактирования
  closeEditModal();
  
  // ТОЛЬКО уведомление, НЕ открываем детальную карточку
  showNotification('Изменения сохранены успешно!');
}

function handleAddDish(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const newId = Math.max(...appData.menu.dishes.map(d => d.id)) + 1;
  
  const newDish = {
    id: newId,
    name: formData.get('name'),
    category: formData.get('category'),
    price: parseInt(formData.get('price')),
    cost: parseInt(formData.get('cost')),
    calories: parseInt(formData.get('calories')),
    popularity: 50,
    rating: 4.0
  };
  
  appData.menu.dishes.push(newDish);
  renderMenuGrid();
  closeAddDishModal();
  
  // ТОЛЬКО уведомление, НЕ открываем детальную карточку
  showNotification('Блюдо успешно добавлено в меню!');
}

// Функция закрытия модального окна редактирования
function closeEditModal() {
  const modal = document.getElementById('editDishModal');
  if (modal) {
    modal.remove();
  }
}

function closeAddDishModal() {
  const modal = document.getElementById('addDishModal');
  if (modal) {
    modal.remove();
  }
}

function openAddDishModal() {
  const modalHtml = `
    <div class="modal" id="addDishModal">
      <div class="modal-backdrop" onclick="closeAddDishModal()"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>Добавить новое блюдо</h3>
          <button class="modal-close" onclick="closeAddDishModal()">×</button>
        </div>
        <div class="modal-body">
          <form id="addDishForm" class="edit-form">
            <div class="form-group">
              <label class="form-label">Название блюда</label>
              <input type="text" class="form-control" name="name" placeholder="Введите название блюда" required>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Цена (₽)</label>
                <input type="number" class="form-control no-spinner" name="price" placeholder="0" min="1" required onkeydown="return event.keyCode !== 38 && event.keyCode !== 40">
              </div>
              <div class="form-group">
                <label class="form-label">Себестоимость (₽)</label>
                <input type="number" class="form-control no-spinner" name="cost" placeholder="0" min="1" required onkeydown="return event.keyCode !== 38 && event.keyCode !== 40">
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Калорийность</label>
                <input type="number" class="form-control no-spinner" name="calories" placeholder="0" min="1" required onkeydown="return event.keyCode !== 38 && event.keyCode !== 40">
              </div>
              <div class="form-group">
                <label class="form-label">Категория</label>
                <select class="form-control" name="category" required>
                  <option value="">Выберите категорию</option>
                  ${appData.menu.categories.filter(cat => cat !== 'Все').map(cat => 
                    `<option value="${cat}">${cat}</option>`
                  ).join('')}
                </select>
              </div>
            </div>
            
            <!-- Информация о автоматическом расчете -->
            <div class="auto-calculation-info">
              <div class="info-text">
                <strong>Рейтинг и популярность</strong> будут рассчитаны автоматически 
                ИИ-системой на основе предпочтений клиентов и статистики заказов
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn btn--outline" onclick="closeAddDishModal()">Отмена</button>
              <button type="submit" class="btn btn--primary">Добавить блюдо</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.getElementById('addDishForm').addEventListener('submit', handleAddDish);
}

// Функция обработки добавления блюда
function handleAddDish(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  // Создаем новый ID (максимальный существующий + 1)
  const newId = Math.max(...appData.menu.dishes.map(d => d.id)) + 1;
  
  // Создаем новое блюдо с начальными значениями для ИИ-расчета
  const newDish = {
    id: newId,
    name: formData.get('name'),
    category: formData.get('category'),
    price: parseInt(formData.get('price')),
    cost: parseInt(formData.get('cost')),
    calories: parseInt(formData.get('calories')),
    // Начальные значения для ИИ-расчета
    popularity: 50, // Среднее значение для нового блюда
    rating: 4.0     // Средний рейтинг для нового блюда
  };
  
  // Добавляем в данные
  appData.menu.dishes.push(newDish);
  
  // Перерисовываем сетку меню
  renderMenuGrid();
  
  // Закрываем модальное окно добавления
  closeAddDishModal();
  
  // НЕ открываем детальную карточку, просто показываем уведомление
  showNotification('Блюдо успешно добавлено в меню! ИИ начнет анализ данных.');
}

// Функция закрытия модального окна добавления
function closeAddDishModal() {
  const modal = document.getElementById('addDishModal');
  if (modal) {
    modal.remove();
  }
}

// Функция для открытия модального окна добавления категории
function openAddCategoryModal() {
  const modalHtml = `
    <div class="modal" id="addCategoryModal">
      <div class="modal-backdrop" onclick="closeAddCategoryModal()"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>Добавить новую категорию</h3>
          <button class="modal-close" onclick="closeAddCategoryModal()">×</button>
        </div>
        <div class="modal-body">
          <form id="addCategoryForm" class="edit-form">
            <div class="form-group">
              <label class="form-label">Название категории</label>
              <input type="text" class="form-control" name="categoryName" placeholder="Введите название категории" required>
            </div>
            
            <!-- Перемещаем информационный текст ПОСЛЕ поля ввода -->
            <div class="auto-calculation-info" style="margin-top: 0.1rem;">
              <div class="info-text">
                <strong>Новая категория</strong> появится в фильтрах и будет доступна для добавления блюд
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn btn--outline" onclick="closeAddCategoryModal()">Отмена</button>
              <button type="submit" class="btn btn--primary">Добавить категорию</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.getElementById('addCategoryForm').addEventListener('submit', handleAddCategory);
}

// Функция обработки добавления категории
// Функция обработки добавления категории
function handleAddCategory(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const categoryName = formData.get('categoryName').trim();
  
  if (!categoryName) return;
  
  // Проверяем, нет ли уже такой категории
  if (appData.menu.categories.includes(categoryName)) {
    showNotification('Категория с таким названием уже существует!');
    return;
  }
  
  // Добавляем новую категорию В КОНЕЦ (справа)
  // "Все" всегда остается первой, остальные добавляются в конец
  const otherCategories = appData.menu.categories.filter(cat => cat !== 'Все');
  appData.menu.categories = ['Все', ...otherCategories, categoryName]; // ← Изменили порядок
  
  // Перерисовываем фильтры
  initCategoryFilters();
  
  // Закрываем модальное окно
  closeAddCategoryModal();
  
  // Показываем уведомление
  showNotification(`Категория "${categoryName}" успешно добавлена!`);
}

// Функция закрытия модального окна добавления категории
function closeAddCategoryModal() {
  const modal = document.getElementById('addCategoryModal');
  if (modal) {
    modal.remove();
  }
}


function createValueSegmentationChart() {
  const ctx = document.getElementById('valueSegmentationChart');
  if (!ctx) return;
  
  charts.valueSegmentationChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['VIP клиенты', 'Постоянные', 'Новые', 'Риск оттока'],
      datasets: [{
        data: [15, 45, 25, 15],
        backgroundColor: [
          '#8b5cf6', // VIP - фиолетовый
          '#06b6d4', // Постоянные - голубой  
          '#10b981', // Новые - зеленый
          '#ef4444'  // Риск оттока - красный
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label;
              const value = context.parsed;
              return `${label}: ${value}%`;
            }
          }
        }
      },
      cutout: '60%'
    }
  });
}

// Обновим существующую функцию создания графика
function createCustomerDynamicsChart() {
  const ctx = document.getElementById('customerDynamicsChart');
  if (!ctx) return;
  
  // Генерируем начальные данные для 30 дней
  const initialData = generateCustomerDynamicsData(30);
  
  charts.customerDynamicsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: initialData.labels,
      datasets: [
        {
          label: 'Новые клиенты',
          data: initialData.newCustomers,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: true,
          borderWidth: 2
        },
        {
          label: 'Повторные клиенты', 
          data: initialData.returningCustomers,
          borderColor: '#06b6d4',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          tension: 0.4,
          fill: true,
          borderWidth: 2
        },
        {
          label: 'Ушедшие клиенты',
          data: initialData.lostCustomers,
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          tension: 0.4,
          fill: true,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 20
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)',
            drawTicks: false
          },
          ticks: {
            maxRotation: 45,
            padding: 10
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          title: {
            display: true,
            text: 'Количество клиентов'
          },
          beginAtZero: true,
          suggestedMax: 100,
          ticks: {
            padding: 10
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'nearest'
      },
      layout: {
        padding: {
          top: 10,
          bottom: 20,
          left: 10,
          right: 10
        }
      }
    }
  });
  
  // Инициализируем селектор периода
  initPeriodSelector();
}


function renderBehaviorPatterns() {
    const container = document.querySelector('.behavior-patterns');
    if (!container) return;
    
    const patterns = appData.customers.behaviorPatterns;
    
    container.innerHTML = patterns.map(pattern => `
        <div class="pattern-item">
            <!-- Процент в правом верхнем углу -->
            <div class="pattern-percentage">${pattern.percentage}% клиентов</div>
            
            <div class="pattern-header">
                <div class="pattern-name">${pattern.department}</div>
            </div>
            
            <div class="pattern-details">
                <div class="pattern-metric">
                    <span>
                        <div class="metric-label">Средний чек</div>
                        <strong>${pattern.averageCheck}₽</strong>
                    </span>
                    <span>
                        <div class="metric-label">Частота</div>
                        <strong>${pattern.frequency} раза/нед</strong>
                    </span>
                    <span>
                        <div class="metric-label">Тренд</div>
                        <div class="trend-indicator ${pattern.trend}">
                            ${getPatternTrendIcon(pattern.trend)}
                        </div>
                    </span>
                </div>
                
                <div class="pattern-additional">
                    <div class="peak-hours">
                        <strong>Пиковые часы:</strong><br>
                        ${pattern.peakHours.join(', ')}
                    </div>
                </div>
                
                <div class="pattern-preferences">
                    ${pattern.preferences.map(pref => 
                        `<span class="preference-tag">${pref}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Функция для иконок тренда остается без изменений
function getPatternTrendIcon(trend) {
    const icons = {
        'up': '↗️ Рост',
        'down': '↘️ Спад', 
        'stable': '→ Стабильно'
    };
    return icons[trend] || '→ Стабильно';
}


// Функция для генерации прогноза
function generateForecast() {
    const dateInput = document.getElementById('planningDate');
    const selectedDate = dateInput.value;
    
    if (!selectedDate) {
        showNotification('Пожалуйста, выберите дату');
        return;
    }
    
    // Показываем загрузку
    const button = document.querySelector('.update-forecast-btn');
    const originalText = button.textContent;
    button.textContent = '⏳ Обновление...';
    button.disabled = true;
    
    // Имитация загрузки данных
    setTimeout(() => {
        // Обновляем метрики на основе выбранной даты
        updateForecastMetrics(selectedDate);
        
        // Восстанавливаем кнопку
        button.textContent = originalText;
        button.disabled = false;
        
        showNotification(`Прогноз обновлен на ${formatDate(selectedDate)}`);
    }, 1000);
}

// Функция обновления метрик на основе даты
function updateForecastMetrics(date) {
    // Генерируем "уникальные" данные на основе даты
    const dateSeed = new Date(date).getDate();
    
    // Обновляем основные метрики
    const metrics = [
        { selector: '.metric-value[data-value="185"]', base: 185, variation: 20 },
        { selector: '.metric-value[data-value="59200"]', base: 59200, variation: 5000 },
        { selector: '.metric-value[data-value="3"]', base: 3, variation: 1 }
    ];
    
    metrics.forEach(metric => {
        const element = document.querySelector(metric.selector);
        if (element) {
            const newValue = metric.base + (dateSeed % metric.variation);
            element.dataset.value = newValue;
        }
    });
    
    // Перезапускаем анимацию счетчиков
    initMetricCounters();
    
    // Обновляем план производства (можно добавить логику)
    updateProductionPlan(dateSeed);
}

// Функция форматирования даты
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Инициализация даты (завтрашний день по умолчанию)
function initForecastDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('planningDate');
    if (dateInput) {
        dateInput.value = tomorrow.toISOString().split('T')[0];

    }
}

// Функция обновления плана производства
function updateProductionPlan(seed) {
    const planItems = document.querySelectorAll('.plan-item');
    planItems.forEach(item => {
        const quantityElement = item.querySelector('.dish-quantity');
        const trendElement = item.querySelector('.dish-trend');
        
        if (quantityElement && trendElement) {
            const currentQuantity = parseInt(quantityElement.textContent);
            const randomChange = (seed % 5) - 2; // -2 to +2
            const newQuantity = Math.max(5, currentQuantity + randomChange);
            
            quantityElement.textContent = `${newQuantity} порций`;
            
            // Обновляем тренд
            if (randomChange > 0) {
                trendElement.textContent = `+${randomChange}`;
                trendElement.className = 'dish-trend positive';
            } else if (randomChange < 0) {
                trendElement.textContent = `${randomChange}`;
                trendElement.className = 'dish-trend negative';
            } else {
                trendElement.textContent = '0';
                trendElement.className = 'dish-trend';
            }
        }
    });
}

// Вызываем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initForecastDate();
});


function simulatePOSDataImport() {
  // Имитируем получение данных за последнюю неделю
  const simulatedSalesData = generateSimulatedSalesData();
  
  // Обрабатываем данные
  updateCustomerAnalytics(simulatedSalesData);
  
  showNotification('Данные из POS-системы успешно обработаны!');
}

function generateSimulatedSalesData() {
  const departments = ['IT', 'Бухгалтерия', 'Менеджмент', 'Производство', 'HR'];
  const salesData = [];
  
  // Генерируем данные за 7 дней
  for (let day = 0; day < 7; day++) {
    const date = new Date();
    date.setDate(date.getDate() - day);
    
    // Для каждого отдела генерируем транзакции
    departments.forEach(dept => {
      const transactionsCount = getDepartmentTransactionCount(dept);
      
      for (let i = 0; i < transactionsCount; i++) {
        salesData.push(generateTransaction(dept, date));
      }
    });
  }
  
  return salesData;
}

function getDepartmentTransactionCount(department) {
  // Разное количество транзакций по отделам
  const counts = {
    'IT': 8,
    'Бухгалтерия': 5, 
    'Менеджмент': 4,
    'Производство': 10,
    'HR': 3
  };
  
  return counts[department] || 5;
}

function generateTransaction(department, date) {
  const hour = getDepartmentPeakHour(department);
  const transactionDate = new Date(date);
  transactionDate.setHours(hour + Math.floor(Math.random() * 2));
  transactionDate.setMinutes(Math.floor(Math.random() * 60));
  
  const dishes = getRandomDishesForDepartment(department);
  const total = dishes.reduce((sum, dish) => sum + dish.price, 0);
  
  return {
    transaction_id: `T${Date.now()}${Math.random()}`,
    timestamp: transactionDate.toISOString(),
    department: department,
    total_amount: total,
    items: dishes
  };
}

function getDepartmentPeakHour(department) {
  // Пиковые часы по отделам
  const peaks = {
    'IT': 12,
    'Бухгалтерия': 13,
    'Менеджмент': 13,
    'Производство': 11,
    'HR': 12
  };
  
  return peaks[department];
}

function getRandomDishesForDepartment(department) {
  // Предпочтения по отделам
  const preferences = {
    'IT': ['Компот', 'Чай', 'Салат Цезарь'], // Здоровое питание
    'Бухгалтерия': ['Салат Оливье', 'Компот', 'Борщ'], // Традиционная кухня
    'Менеджмент': ['Рыба запеченная', 'Чай', 'Солянка мясная'], // Премиум
    'Производство': ['Плов узбекский', 'Куриная котлета', 'Компот'], // Сытные блюда
    'HR': ['Салат Цезарь', 'Чай', 'Борщ'] // Легкое питание
  };
  
  const preferredDishes = preferences[department] || [];
  const selectedDishes = [];
  
  // Выбираем 1-3 блюда
  const dishCount = Math.floor(Math.random() * 3) + 1;
  
  for (let i = 0; i < dishCount; i++) {
    const dishName = preferredDishes[Math.floor(Math.random() * preferredDishes.length)];
    const dish = appData.menu.dishes.find(d => d.name === dishName);
    if (dish) {
      selectedDishes.push({
        dish_id: dish.id,
        dish_name: dish.name,
        quantity: 1,
        price: dish.price
      });
    }
  }
  
  return selectedDishes;
}


// Система аутентификации
let currentUser = null;
const users = {
  "admin@school25.ru": {
    password: "password123",
    canteenName: "Столовая Школы №25",
    subscription: "pro",
    role: "admin"
  },
  "manager@college-tech.ru": {
    password: "password123", 
    canteenName: "Колледж Технологический",
    subscription: "starter",
    role: "manager"
  },
  "director@university.edu": {
    password: "password123",
    canteenName: "Университетская столовая",
    subscription: "enterprise", 
    role: "director"
  }
};

// Инициализация системы аутентификации
function initAuthSystem() {
  // Проверяем, авторизован ли пользователь
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    showMainInterface();
  } else {
    // При первом заходе показываем основной интерфейс без авторизации
    showMainInterface();
    
    // Создаем демо-пользователя для первого входа
    currentUser = {
      email: "demo@school25.ru",
      canteenName: "Демо-столовая Школы №25",
      subscription: "pro",
      role: "demo"
    };
  }
  
  // Обработчики форм
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
  
  // Обработчик выхода
  // document.getElementById('logoutButton').addEventListener('click', handleLogout);
}


// Показать модальное окно аутентификации
function showAuthModal() {
  document.body.classList.add('unauthorized');
  document.getElementById('authModal').classList.remove('hidden');
}

// Закрыть модальное окно аутентификации
function closeAuthModal() {
  // Не даем закрыть, если пользователь не авторизован
  if (!currentUser) {
    return;
  }
  document.getElementById('authModal').classList.add('hidden');
}

// Переключение между вкладками входа и регистрации
function switchAuthTab(tabName) {
  // Обновляем активные вкладки
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  
  // Показываем соответствующую форму
  document.querySelectorAll('.auth-form').forEach(form => {
    form.classList.toggle('active', form.id === `${tabName}Form`);
  });
}

// Обработчик входа
function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Проверка учетных данных
  if (users[email] && users[email].password === password) {
    currentUser = {
      email: email,
      ...users[email]
    };
    
    // Сохраняем в localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Показываем основной интерфейс
    showMainInterface();
    showNotification(`Добро пожаловать, ${currentUser.canteenName}!`);
  } else {
    showNotification('Неверный email или пароль', 'error');
  }
}

// Обработчик регистрации
function handleRegister(e) {
  e.preventDefault();
  
  const canteenName = document.getElementById('registerCanteenName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const subscription = document.getElementById('subscriptionType').value;
  
  // Создаем нового пользователя
  users[email] = {
    password: password,
    canteenName: canteenName,
    subscription: subscription,
    role: 'manager'
  };
  
  currentUser = {
    email: email,
    ...users[email]
  };
  
  // Сохраняем в localStorage
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  // Показываем основной интерфейс
  showMainInterface();
  showNotification(`Регистрация успешна! Добро пожаловать в DineOptix!`);
}

// Обработчик выхода
function handleLogout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  
  // Сбрасываем формы
  document.getElementById('loginForm').reset();
  document.getElementById('registerForm').reset();
  
  // Переключаем на вкладку входа
  switchAuthTab('login');
  
  // Показываем окно аутентификации
  showAuthModal();
  
  // Закрываем выпадающее меню профиля
  document.getElementById('profileDropdown').classList.add('hidden');
  
  // Скрываем основной интерфейс
  document.body.classList.add('unauthorized');
}

// Показать основной интерфейс
function showMainInterface() {
  document.body.classList.remove('unauthorized');
  document.getElementById('authModal').classList.add('hidden');
  
  // Обновляем информацию в профиле
  updateProfileInfo();
}

// Обновить информацию в профиле
function updateProfileInfo() {
  if (currentUser) {
    // Можно добавить отображение информации о пользователе в интерфейсе
    console.log('Пользователь:', currentUser.canteenName);
  }
}

// Функция для демо-входа (удобно для тестирования)
function demoLogin(email) {
  document.getElementById('loginEmail').value = email;
  document.getElementById('loginPassword').value = 'password123';
  document.getElementById('loginForm').dispatchEvent(new Event('submit'));
}



// Функция для инициализации селектора периода
function initPeriodSelector() {
  const periodButtons = document.querySelectorAll('.period-btn');
  
  periodButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Убираем активный класс у всех кнопок
      periodButtons.forEach(btn => btn.classList.remove('active'));
      
      // Добавляем активный класс текущей кнопке
      this.classList.add('active');
      
      // Получаем выбранный период
      const period = parseInt(this.dataset.period);
      
      // Обновляем данные графика
      updateCustomerDynamicsChart(period);
    });
  });
}

// Функция обновления графика динамики клиентов
function updateCustomerDynamicsChart(periodDays) {
  // Генерируем данные в зависимости от периода
  const chartData = generateCustomerDynamicsData(periodDays);
  
  // Обновляем график
  if (charts.customerDynamicsChart) {
    charts.customerDynamicsChart.data.labels = chartData.labels;
    charts.customerDynamicsChart.data.datasets[0].data = chartData.newCustomers;
    charts.customerDynamicsChart.data.datasets[1].data = chartData.returningCustomers;
    charts.customerDynamicsChart.data.datasets[2].data = chartData.lostCustomers;
    charts.customerDynamicsChart.update();
  }
}

// Функция генерации данных для разных периодов
function generateCustomerDynamicsData(periodDays) {
  const labels = [];
  const newCustomers = [];
  const returningCustomers = [];
  const lostCustomers = [];
  
  // Генерируем данные в зависимости от периода
  for (let i = 0; i < periodDays; i++) {
    if (periodDays <= 30) {
      // Для 30 дней - показываем каждый день
      labels.push(`День ${i + 1}`);
    } else if (periodDays <= 90) {
      // Для 90 дней - показываем каждую неделю
      if (i % 7 === 0) {
        labels.push(`Неделя ${i / 7 + 1}`);
      }
    } else {
      // Для года - показываем каждый месяц
      if (i % 30 === 0) {
        labels.push(`Месяц ${i / 30 + 1}`);
      }
    }
    
    // Генерируем реалистичные данные
    const baseNew = periodDays <= 30 ? 8 : (periodDays <= 90 ? 60 : 250);
    const baseReturning = periodDays <= 30 ? 40 : (periodDays <= 90 ? 280 : 1200);
    const baseLost = periodDays <= 30 ? 5 : (periodDays <= 90 ? 35 : 150);
    
    const variation = periodDays <= 30 ? 0.3 : (periodDays <= 90 ? 0.4 : 0.5);
    
    newCustomers.push(Math.floor(baseNew * (1 + (Math.random() - 0.5) * variation)));
    returningCustomers.push(Math.floor(baseReturning * (1 + (Math.random() - 0.5) * variation)));
    lostCustomers.push(Math.floor(baseLost * (1 + (Math.random() - 0.5) * variation)));
  }
  
  // Фильтруем данные для длинных периодов
  if (periodDays > 30) {
    return {
      labels: labels.filter(label => label),
      newCustomers: newCustomers.filter((_, index) => index % (periodDays <= 90 ? 7 : 30) === 0),
      returningCustomers: returningCustomers.filter((_, index) => index % (periodDays <= 90 ? 7 : 30) === 0),
      lostCustomers: lostCustomers.filter((_, index) => index % (periodDays <= 90 ? 7 : 30) === 0)
    };
  }
  
  return {
    labels,
    newCustomers,
    returningCustomers,
    lostCustomers
  };
}




// Инициализация менеджера аналитики
function initAnalyticsManager() {
  const analyticsButton = document.getElementById('analyticsButton');
  const analyticsSidebar = document.getElementById('analyticsSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');

  // Открытие сайдбара
  analyticsButton.addEventListener('click', openAnalyticsSidebar);

  // Закрытие сайдбара
  sidebarClose.addEventListener('click', closeAnalyticsSidebar);
  sidebarOverlay.addEventListener('click', closeAnalyticsSidebar);

  // Закрытие по ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAnalyticsSidebar();
    }
  });

  // Инициализация данных
  updateNetworkInfo();
  renderLocationsList();
}

// Функции для новых кнопок в сайдбаре
function openSettings() {
  closeAnalyticsSidebar();
  
  // Находим и активируем ссылку на настройки
  const settingsLink = document.querySelector('.dropdown-item[data-page="settings"]');
  if (settingsLink) {
    settingsLink.click();
  } else {
    // Альтернативный способ перехода
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    
    document.getElementById('settings').classList.add('active');
  }
  
  //showNotification('Переход в настройки');
}


// Открытие сайдбара
function openAnalyticsSidebar() {
  const analyticsSidebar = document.getElementById('analyticsSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  
  analyticsSidebar.classList.add('open');
  sidebarOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  
  // Инициализируем клик по аватару после открытия сайдбара
  setTimeout(initSidebarProfileClick, 100);
}

// Закрытие сайдбара
function closeAnalyticsSidebar() {
  const analyticsSidebar = document.getElementById('analyticsSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  
  analyticsSidebar.classList.remove('open');
  sidebarOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Обновление информации о сети
function updateNetworkInfo() {
  const profileName = document.querySelector('.profile-name');
  const profileStatus = document.querySelector('.profile-status');
  const locationsCount = document.querySelector('.locations-count');
  
  if (profileName && profileStatus && locationsCount) {
    profileName.textContent = networkData.mainAccount.name;
    profileStatus.textContent = `Профессиональный • точек: ${networkData.locations.length} `;
    locationsCount.textContent = `${networkData.locations.length}/${networkData.mainAccount.maxLocations}`;
  }
}

// Рендер списка точек
function renderLocationsList() {
  const container = document.querySelector('.locations-list');
  if (!container) return;

  container.innerHTML = networkData.locations.map(location => `
    <div class="location-card ${location.active ? 'active' : ''}" 
         onclick="switchLocation(${location.id})">
      <div class="location-icon" onclick="event.stopPropagation(); openProfilePage()">${location.icon}</div>
      <div class="location-details">
        <div class="location-title">${location.name}</div>
        <div class="location-meta">
          <span class="location-revenue">${formatNumber(location.revenue)}₽/мес</span>
          <span class="location-status status-${location.status}" id="status-${location.id}">
            ${location.status === 'online' ? '🟢 Online' : '🔴 Offline'}
          </span>
        </div>
      </div>
      <button class="location-menu-button" onclick="event.stopPropagation(); toggleLocationMenu(${location.id})">
        ⋯
      </button>
      <div class="location-dropdown hidden" id="location-menu-${location.id}">
        <div class="dropdown-menu-item" onclick="editLocation(${location.id})">
          <span>✏️</span>
          Редактировать
        </div>
        <div class="dropdown-menu-item delete" onclick="deleteLocation(${location.id})">
          <span>🗑️</span>
          Удалить
        </div>
        <div class="dropdown-menu-item" onclick="toggleLocationStatus(${location.id})">
          <span>🔄</span>
          ${location.status === 'online' ? 'Отключить' : 'Включить'}
        </div>
      </div>
    </div>
  `).join('');
}


function updateLocationStatus(locationId) {
  const location = networkData.locations.find(loc => loc.id === locationId);
  if (!location) return;

  // Находим элементы статуса и кнопки в выпадающем меню
  const statusElement = document.getElementById(`status-${locationId}`);
  const dropdownMenu = document.getElementById(`location-menu-${locationId}`);
  
  if (statusElement && dropdownMenu) {
    // Обновляем только статус и текст кнопки
    statusElement.className = `location-status status-${location.status}`;
    statusElement.innerHTML = location.status === 'online' ? '🟢 Online' : '🔴 Offline';
    
    // Обновляем текст в выпадающем меню
    const toggleButton = dropdownMenu.querySelector('.dropdown-menu-item:nth-child(3)');
    if (toggleButton) {
      toggleButton.innerHTML = `
        <span>🔄</span>
        ${location.status === 'online' ? 'Отключить' : 'Включить'}
      `;
    }
  }
}

// Функция открытия страницы профиля из бокового меню
function openProfilePage() {
  // Закрываем сайдбар аналитики
  closeAnalyticsSidebar();
  
  // Находим и активируем ссылку на профиль в основном меню
  const profileLink = document.querySelector('.dropdown-item[data-page="profile"]');
  if (profileLink) {
    profileLink.click();
  } else {
    // Альтернативный способ перехода на страницу профиля
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    
    document.getElementById('profile').classList.add('active');
    
    // Показываем уведомление
    // showNotification('Переход на страницу профиля');
  }
}

// Переключение между локациями
function switchLocation(locationId) {
  // Проверяем, не был ли клик по кнопке меню
  if (event && (event.target.closest('.location-menu-button') || event.target.closest('.location-dropdown'))) {
    return;
  }
  
  // Сбрасываем активный статус у всех локаций
  networkData.locations.forEach(loc => loc.active = false);
  
  // Устанавливаем новую активную локацию
  const newLocation = networkData.locations.find(loc => loc.id === locationId);
  if (newLocation) {
    newLocation.active = true;
    
    // Обновляем интерфейс
    renderLocationsList();
    updateMainInterface(newLocation);
    
    // Закрываем сайдбар на мобильных
    if (window.innerWidth < 768) {
      closeAnalyticsSidebar();
    }
    
    // Показываем уведомление
    // showNotification(`Переключено на: ${newLocation.name}`);
  }
}
// Обновление главного интерфейса при смене локации
function updateMainInterface(location) {
  // Здесь будет логика загрузки данных для выбранной локации
  // Пока просто имитируем обновление
  setTimeout(() => {
    initMetricCounters();
    initCharts();
    renderMenuGrid();
  }, 500);
}

// Функции для быстрых действий
function openNetworkAnalytics() {
  closeAnalyticsSidebar();
  
  // Здесь будет логика для сводной аналитики по сети
  // Пока просто показываем уведомление
  // showNotification('Сводная аналитика по всем точкам сети');
  
  // Можно добавить модальное окно или перейти на специальную страницу
  showNetworkAnalyticsModal();
}

function openComparisonTool() {
  closeAnalyticsSidebar();
  showNotification('Инструмент сравнения точек');
  // Здесь будет открытие инструмента сравнения
}

function handleSidebarLogout() {
  closeAnalyticsSidebar();
  
  // Подтверждение выхода
  if (confirm('Вы уверены, что хотите выйти из системы?')) {
    handleLogout();
  }
}
// Функция добавления новой точки 
function openAddLocationModal() {
  closeAnalyticsSidebar();
  
  if (networkData.locations.length >= networkData.mainAccount.maxLocations) {
    showNotification(`Достигнут лимит точек (${networkData.mainAccount.maxLocations}). Обновите подписку.`, 'error');
    return;
  }
  
  // Используем существующую модалку добавления локации
  const modalHtml = `
    <div class="modal" id="addLocationModal">
      <div class="modal-backdrop" onclick="closeAddLocationModal()"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>Добавить новую точку</h3>
          <button class="modal-close" onclick="closeAddLocationModal()">×</button>
        </div>
        <div class="modal-body">
          <form id="addLocationForm" class="edit-form">
            <div class="form-group">
              <label class="form-label">Название точки</label>
              <input type="text" class="form-control" name="locationName" placeholder="Ресторан 'Новый'" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Адрес</label>
              <input type="text" class="form-control" name="locationAddress" placeholder="ул. Примерная, 123" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Тип заведения</label>
              <select class="form-control" name="locationType" required>
                <option value="restaurant">Ресторан</option>
                <option value="cafe">Кафе</option>
                <option value="canteen">Столовая</option>
                <option value="fastfood">Фастфуд</option>
                <option value="bar">Бар</option>
              </select>
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn btn--outline" onclick="closeAddLocationModal()">Отмена</button>
              <button type="submit" class="btn btn--primary">Добавить точку</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.getElementById('addLocationForm').addEventListener('submit', handleAddLocation);
}

function closeAddLocationModal() {
  const modal = document.getElementById('addLocationModal');
  if (modal) {
    modal.remove();
  }
}


// Обновите функцию handleAddLocation для правильной обработки формы
function handleAddLocation(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const locationType = formData.get('locationType');
  const icons = {
    restaurant: '🍽️',
    cafe: '☕',
    canteen: '🏢',
    fastfood: '🍔',
    bar: '🍸'
  };
  
  const newLocation = {
    id: Math.max(...networkData.locations.map(loc => loc.id)) + 1,
    name: formData.get('locationName'),
    address: formData.get('locationAddress'),
    type: locationType,
    revenue: 0,
    status: 'online',
    active: false,
    icon: icons[locationType] || '🏢'
  };
  
  networkData.locations.push(newLocation);
  closeAddLocationModal();
  
  // Обновляем интерфейс
  updateNetworkInfo();
  renderLocationsList();
  
}



// Дополнительный обработчик клика по документу
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('analyticsSidebar');
    const analyticsButton = document.getElementById('analyticsButton');
    
    if (sidebar.classList.contains('open') && 
        !sidebar.contains(e.target) && 
        !analyticsButton.contains(e.target)) {
        closeAnalyticsSidebar();
    }
});





// Функция переключения меню точек
function toggleLocationMenu(locationId) {
  // Закрываем все открытые меню
  document.querySelectorAll('.location-dropdown').forEach(menu => {
    menu.classList.add('hidden');
  });
  
  // Открываем/закрываем нужное меню
  const menu = document.getElementById(`location-menu-${locationId}`);
  if (menu) {
    menu.classList.toggle('hidden');
  }
  
  // Закрытие меню при клике вне его
  setTimeout(() => {
    const closeMenuHandler = (e) => {
      if (!e.target.closest('.location-menu-button') && !e.target.closest('.location-dropdown')) {
        document.querySelectorAll('.location-dropdown').forEach(menu => {
          menu.classList.add('hidden');
        });
        document.removeEventListener('click', closeMenuHandler);
      }
    };
    document.addEventListener('click', closeMenuHandler);
  }, 100);
}

// Функция редактирования точки
function editLocation(locationId) {
  const location = networkData.locations.find(loc => loc.id === locationId);
  if (!location) return;
  
  // Закрываем меню
  document.querySelectorAll('.location-dropdown').forEach(menu => {
    menu.classList.add('hidden');
  });
  
  // Открываем модальное окно редактирования
  openEditLocationModal(location);
}

// Функция удаления точки
function deleteLocation(locationId) {
  const location = networkData.locations.find(loc => loc.id === locationId);
  if (!location) return;
  
  if (confirm(`Вы уверены, что хотите удалить точку "${location.name}"?`)) {
    // Не даем удалить активную точку
    if (location.active) {
      showNotification('Нельзя удалить активную точку. Сначала переключитесь на другую.', 'error');
      return;
    }
    
    // Удаляем точку
    networkData.locations = networkData.locations.filter(loc => loc.id !== locationId);
    
    // Обновляем интерфейс
    updateNetworkInfo();
    renderLocationsList();
    
    // showNotification(`Точка "${location.name}" удалена`);
  }
}

// Функция переключения статуса точки
function toggleLocationStatus(locationId) {
  const location = networkData.locations.find(loc => loc.id === locationId);
  if (!location) return;
  
  // Меняем статус
  location.status = location.status === 'online' ? 'offline' : 'online';
  
  // Обновляем только статус, а не весь список
  updateLocationStatus(locationId);
  
  // НЕ закрываем меню и НЕ показываем уведомление
  // Меню останется открытым, сайдбар не закроется
}

// Модальное окно редактирования точки
function openEditLocationModal(location) {
  const modalHtml = `
    <div class="modal" id="editLocationModal">
      <div class="modal-backdrop" onclick="closeEditLocationModal()"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>Редактировать точку</h3>
          <button class="modal-close" onclick="closeEditLocationModal()">×</button>
        </div>
        <div class="modal-body">
          <form id="editLocationForm" class="edit-form">
            <input type="hidden" name="locationId" value="${location.id}">
            
            <div class="form-group">
              <label class="form-label">Название точки</label>
              <input type="text" class="form-control" name="locationName" value="${location.name}" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Адрес</label>
              <input type="text" class="form-control" name="locationAddress" value="${location.address}" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Тип заведения</label>
              <select class="form-control" name="locationType" required>
                <option value="restaurant" ${location.type === 'restaurant' ? 'selected' : ''}>Ресторан</option>
                <option value="cafe" ${location.type === 'cafe' ? 'selected' : ''}>Кафе</option>
                <option value="canteen" ${location.type === 'canteen' ? 'selected' : ''}>Столовая</option>
                <option value="fastfood" ${location.type === 'fastfood' ? 'selected' : ''}>Фастфуд</option>
                <option value="bar" ${location.type === 'bar' ? 'selected' : ''}>Бар</option>
              </select>
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn--outline" onclick="closeEditLocationModal()">Отмена</button>
              <button type="submit" class="btn btn--primary">Сохранить изменения</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.getElementById('editLocationForm').addEventListener('submit', handleEditLocation);
}

// Обработчик сохранения изменений точки
function handleEditLocation(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const locationId = parseInt(formData.get('locationId'));
  
  const location = networkData.locations.find(loc => loc.id === locationId);
  if (location) {
    const locationType = formData.get('locationType');
    const icons = {
      restaurant: '🍽️',
      cafe: '☕', 
      canteen: '🏢',
      fastfood: '🍔',
      bar: '🍸'
    };
    
    // Сохраняем только название, адрес и тип
    // Статус остается неизменным (управляется отдельной кнопкой)
    location.name = formData.get('locationName');
    location.address = formData.get('locationAddress');
    location.type = locationType;
    location.icon = icons[locationType] || '🏢';
  }
  
  // Обновляем интерфейс
  updateNetworkInfo();
  renderLocationsList();
  closeEditLocationModal();
  
}

// Функция закрытия модального окна редактирования
function closeEditLocationModal() {
  const modal = document.getElementById('editLocationModal');
  if (modal) {
    modal.remove();
  }
}


// Добавьте эту функцию в app.js
function initSidebarProfileClick() {
  const profileAvatar = document.querySelector('.sidebar-header .profile-avatar');
  if (profileAvatar) {
    profileAvatar.style.cursor = 'pointer';
    profileAvatar.addEventListener('click', openProfilePage);
    
    // Добавляем подсказку при наведении
    profileAvatar.title = 'Перейти в профиль';
  }
}


// Функция открытия модального окна подписок
function openSubscriptionModal() {
    const modalHtml = `
        <div class="modal" id="subscriptionModal">
            <div class="modal-backdrop" onclick="closeSubscriptionModal()"></div>
            <div class="modal-content no-scrollbar" style="max-width: 1200px; max-height: 96vh; margin-top: 0vh;"> <!-- ← Добавлен класс no-scrollbar -->
                <div class="modal-header">
                    <h3>Выбор подписки</h3>
                    <button class="modal-close" onclick="closeSubscriptionModal()">×</button>
                </div>
                <div class="modal-body">
                    <div class="subscription-plans">
                        <div class="plan-card">
                            <div class="plan-header">
                                <h4>Базовый</h4>
                                <div class="plan-price">0₽<span>/месяц</span></div>
                            </div>
                            <ul class="plan-features">
                                <li>До 1 точки питания</li>
                                <li>Базовая аналитика</li>
                                <li>Управление меню</li>
                                <li>Техническая поддержка</li>
                                <li class="disabled">AI-рекомендации</li>
                                <li class="disabled">Мульти-локационный анализ</li>
                                <li class="disabled">Расширенная отчетность</li>
                            </ul>
                            <button class="btn btn--outline" onclick="selectPlan('basic')">Выбрать план</button>
                        </div>
                        
                        <div class="plan-card featured">
                            <div class="plan-badge">Рекомендуем</div>
                            <div class="plan-header">
                                <h4>Профессиональный</h4>
                                <div class="plan-price">5,000₽<span>/месяц</span></div>
                            </div>
                            <ul class="plan-features">
                                <li>До 5 точек питания</li>
                                <li>Расширенная аналитика</li>
                                <li>Управление меню</li>
                                <li>Приоритетная поддержка</li>
                                <li>AI-рекомендации</li>
                                <li>Мульти-локационный анализ</li>
                                <li class="disabled">Расширенная отчетность</li>
                            </ul>
                            <button class="btn btn--primary" onclick="selectPlan('professional')">Текущий план</button>
                        </div>
                        
                        <div class="plan-card">
                            <div class="plan-header">
                                <h4>Корпоративный</h4>
                                <div class="plan-price">15,000₽<span>/месяц</span></div>
                            </div>
                            <ul class="plan-features">
                                <li>Неограниченное количество точек</li>
                                <li>Полная аналитика + прогнозы</li>
                                <li>Расширенное управление меню</li>
                                <li>24/7 поддержка</li>
                                <li>Расширенные AI-рекомендации</li>
                                <li>Глубокая мульти-локационная аналитика</li>
                                <li>Кастомная отчетность и дашборды</li>
                            </ul>
                            <button class="btn btn--outline" onclick="selectPlan('enterprise')">Выбрать план</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// Функция закрытия модального окна подписок
function closeSubscriptionModal() {
    const modal = document.getElementById('subscriptionModal');
    if (modal) {
        modal.remove();
    }
}

// Функция выбора плана подписки
function selectPlan(planType) {
    const plans = {
        'basic': 'Базовый',
        'professional': 'Профессиональный', 
        'enterprise': 'Корпоративный'
    };
    
    // Обновляем данные пользователя
    if (currentUser) {
        currentUser.subscription = planType;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    // Обновляем отображение в профиле
    updateSubscriptionDisplay(planType);
    
    // Закрываем модальное окно
    closeSubscriptionModal();
    
    // Показываем уведомление
    showNotification(`Подписка изменена на "${plans[planType]}"`);
}

// Функция обновления отображения подписки в профиле
function updateSubscriptionDisplay(planType) {
    const subscriptionBadge = document.querySelector('.subscription-badge');
    const subscriptionDetails = document.querySelector('.subscription-details');
    
    if (subscriptionBadge && subscriptionDetails) {
        const planData = getPlanData(planType);
        
        subscriptionBadge.className = `subscription-badge ${planType}`;
        subscriptionBadge.textContent = planData.name;
        
        subscriptionDetails.innerHTML = `
            <p><strong>Действует до:</strong> ${planData.expiryDate}</p>
            <p><strong>Лимит точек:</strong> ${planData.locationLimit}</p>
            <p><strong>Стоимость:</strong> ${planData.price}</p>
        `;
    }
}

// Функция получения данных о плане
function getPlanData(planType) {
    const plans = {
        'basic': {
            name: 'Базовый',
            expiryDate: '31.12.2024',
            locationLimit: '1',
            price: '0₽/мес'
        },
        'professional': {
            name: 'Профессиональный',
            expiryDate: '31.12.2024', 
            locationLimit: '5',
            price: '5,000₽/мес'
        },
        'enterprise': {
            name: 'Корпоративный',
            expiryDate: '31.12.2024',
            locationLimit: 'Неограниченно',
            price: '15,000₽/мес'
        }
    };
    
    return plans[planType] || plans['professional'];
}


// Добавьте эту функцию для инициализации селектора периода
// Функция для инициализации переключателя периода
function initDishesPeriodSelector() {
    const periodButtons = document.querySelectorAll('.period-selector-buttons .period-btn');
    
    periodButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            periodButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Получаем выбранный период
            const period = this.dataset.period;
            
            // Обновляем данные
            updateTopDishes(period);
        });
    });
}

// Функция для обновления топ-блюд в зависимости от периода
function updateTopDishes(period) {
    const container = document.getElementById('topDishes');
    
    // Имитация данных для разных периодов (как в предыдущем примере)
    const periodData = {
        month: [
            {"name": "Борщ", "orders": 1800, "change": "+12%", "category": "Первые блюда"},
            {"name": "Куриная котлета с пюре", "orders": 1750, "change": "+8%", "category": "Вторые блюда"},
            {"name": "Салат Цезарь", "orders": 1200, "change": "-3%", "category": "Салаты"},
            {"name": "Плов узбекский", "orders": 1150, "change": "+15%", "category": "Вторые блюда"},
            {"name": "Компот из сухофруктов", "orders": 1100, "change": "+5%", "category": "Напитки"}
        ],
        quarter: [
            {"name": "Плов узбекский", "orders": 5200, "change": "+25%", "category": "Вторые блюда"},
            {"name": "Борщ", "orders": 5100, "change": "+15%", "category": "Первые блюда"},
            {"name": "Куриная котлета с пюре", "orders": 4800, "change": "+10%", "category": "Вторые блюда"},
            {"name": "Салат Оливье", "orders": 3500, "change": "+8%", "category": "Салаты"},
            {"name": "Компот из сухофруктов", "orders": 3200, "change": "+12%", "category": "Напитки"}
        ],
        year: [
            {"name": "Борщ", "orders": 21500, "change": "+18%", "category": "Первые блюда"},
            {"name": "Куриная котлета с пюре", "orders": 19800, "change": "+12%", "category": "Вторые блюда"},
            {"name": "Плов узбекский", "orders": 18500, "change": "+30%", "category": "Вторые блюда"},
            {"name": "Салат Оливье", "orders": 14200, "change": "+5%", "category": "Салаты"},
            {"name": "Чай", "orders": 13500, "change": "+8%", "category": "Напитки"}
        ]
    };

    const dishes = periodData[period] || periodData.month;
    
    container.innerHTML = dishes.map((dish, index) => `
        <div class="popular-dish-item">
            <div class="popular-dish-header">
                <span class="popular-rank">#${index + 1}</span>
                <span class="popular-name">${dish.name}</span>
                <span class="popular-orders">${dish.orders.toLocaleString()} заказов</span>
            </div>
            <div class="popular-dish-details">
                <div class="popular-category">${dish.category}</div>
                <div class="popular-change ${dish.change.startsWith('+') ? 'positive' : 'negative'}">${dish.change}</div>
            </div>
        </div>
    `).join('');
}


// Функция для обновления отступа основного контента
function updateMainContentPadding() {
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('.main-content');
    
    if (navbar && mainContent) {
        const navbarHeight = navbar.offsetHeight;
        const isMobile = window.innerWidth <= 768;
        
        // Разные отступы для мобильных и десктопных устройств
        const desktopMargin = 72; // Для десктопов
        const mobileMargin = navbarHeight + 20; // Для мобильных - высота навигации + отступ
        
        // Используем разный отступ в зависимости от устройства
        mainContent.style.marginTop = isMobile ? mobileMargin + 'px' : desktopMargin + 'px';
        
        // Также можно добавить дополнительный отступ для очень маленьких экранов
        if (window.innerWidth <= 480) {
            mainContent.style.marginTop = navbarHeight + 12 + 'px';
        }
    }
}

// Вызываем при загрузке и изменении размера окна
window.addEventListener('load', updateMainContentPadding);
window.addEventListener('resize', updateMainContentPadding);

// Также вызываем после переключения страниц или изменения содержимого
document.addEventListener('DOMContentLoaded', updateMainContentPadding);

// Вызываем также при изменении ориентации устройства
window.addEventListener('orientationchange', updateMainContentPadding);

// Вызываем с небольшой задержкой после загрузки всех ресурсов
window.addEventListener('load', () => {
    setTimeout(updateMainContentPadding, 100);
});