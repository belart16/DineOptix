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
    "topLossMakers": [
  {
    "name": "Стейк из лосося",
    "cost": 420,
    "price": 480,
    "lossPerPortion": -60,
    "monthlyLoss": -12000,
    "orders": 200,
    "reason": "Высокая себестоимость, низкая наценка"
  },
  {
    "name": "Салат с креветками",
    "cost": 180,
    "price": 200,
    "lossPerPortion": -20,
    "monthlyLoss": -8000,
    "orders": 400,
    "reason": "Быстрая порча ингредиентов"
  },
  {
    "name": "Тирамису",
    "cost": 95,
    "price": 100,
    "lossPerPortion": -5,
    "monthlyLoss": -6000,
    "orders": 1200,
    "reason": "Трудоемкое приготовление"
  },
  {
    "name": "Суп том-ям",
    "cost": 110,
    "price": 120,
    "lossPerPortion": -10,
    "monthlyLoss": -5000,
    "orders": 500,
    "reason": "Экзотичные дорогие ингредиенты"
  },
  {
    "name": "Говядина по-бургундски",
    "cost": 280,
    "price": 300,
    "lossPerPortion": -20,
    "monthlyLoss": -4000,
    "orders": 200,
    "reason": "Длительное приготовление"
  }
],
    "topDishes": [
      {"name": "Борщ украинский", "orders": 156, "change": "+12%", "rating": 4.6, "category": "Первые блюда"},
      {"name": "Куриная котлета с пюре", "orders": 143, "change": "+8%", "rating": 4.4, "category": "Вторые блюда"},
      {"name": "Салат Цезарь", "orders": 128, "change": "-3%", "rating": 4.3, "category": "Салаты"},
      {"name": "Плов узбекский", "orders": 112, "change": "+15%", "rating": 4.5, "category": "Вторые блюда"},
      {"name": "Компот из сухофруктов", "orders": 98, "change": "+5%", "rating": 4.1, "category": "Напитки"}
    ]
  },
  "menu": {
    "categories": ["Все", "Первые блюда", "Вторые блюда", "Салаты", "Напитки", "Десерты"],
    "dishes": [
      {"id": 1, "name": "Борщ украинский", "category": "Первые блюда", "price": 150, "cost": 85, "popularity": 95, "rating": 4.6, "calories": 280},
      {"id": 2, "name": "Солянка мясная", "category": "Первые блюда", "price": 170, "cost": 95, "popularity": 78, "rating": 4.3, "calories": 320},
      {"id": 3, "name": "Куриная котлета", "category": "Вторые блюда", "price": 220, "cost": 120, "popularity": 88, "rating": 4.4, "calories": 450},
      {"id": 4, "name": "Плов узбекский", "category": "Вторые блюда", "price": 200, "cost": 110, "popularity": 82, "rating": 4.5, "calories": 520},
      {"id": 5, "name": "Рыба запеченная", "category": "Вторые блюда", "price": 250, "cost": 140, "popularity": 65, "rating": 4.1, "calories": 380},
      {"id": 6, "name": "Салат Цезарь", "category": "Салаты", "price": 180, "cost": 95, "popularity": 78, "rating": 4.3, "calories": 290},
      {"id": 7, "name": "Салат Оливье", "category": "Салаты", "price": 160, "cost": 85, "popularity": 92, "rating": 4.2, "calories": 310},
      {"id": 8, "name": "Компот", "category": "Напитки", "price": 50, "cost": 25, "popularity": 85, "rating": 4.1, "calories": 80},
      {"id": 9, "name": "Чай", "category": "Напитки", "price": 30, "cost": 15, "popularity": 95, "rating": 4.0, "calories": 5}
    ]
  },
  "customers": {
    "demographics": {
      "ageGroups": {"20-30": 35, "31-40": 28, "41-50": 22, "51-60": 15},
      "departments": {"IT": 32, "Бухгалтерия": 18, "Менеджмент": 15, "Производство": 25, "HR": 10},
      "loyaltySegments": {"VIP": 15, "Постоянные": 45, "Регулярные": 30, "Новые": 10}
    },
    "behaviorPatterns": [
      {"pattern": "Ранний завтрак", "percentage": 25, "avgSpend": 180},
      {"pattern": "Обеденный пик", "percentage": 55, "avgSpend": 320},
      {"pattern": "Поздний обед", "percentage": 20, "avgSpend": 280}
    ]
  },
  "forecasts": {
    "weeklyDemand": [
      {"day": "Пн", "predicted": 195, "confidence": 85, "actual": 188},
      {"day": "Вт", "predicted": 210, "confidence": 88, "actual": 205},
      {"day": "Ср", "predicted": 205, "confidence": 82, "actual": 198},
      {"day": "Чт", "predicted": 280, "confidence": 90, "actual": 220},
      {"day": "Пт", "predicted": 235, "confidence": 87, "actual": 230},
      {"day": "Сб", "predicted": 85, "confidence": 75, "actual": 82},
      {"day": "Вс", "predicted": 45, "confidence": 70, "actual": 48}
    ],
    "seasonalTrends": [
      {"month": "Янв", "soup": 85, "main": 65, "salad": 45},
      {"month": "Фев", "soup": 82, "main": 68, "salad": 48},
      {"month": "Мар", "soup": 75, "main": 72, "salad": 55},
      {"month": "Апр", "soup": 68, "main": 75, "salad": 62},
      {"month": "Май", "soup": 55, "main": 78, "salad": 72},
      {"month": "Июн", "soup": 45, "main": 82, "salad": 85}
    ]
  },
  "aiInsights": [
    {
      "type": "recommendation",
      "title": "Добавить веганские опции",
      "description": "Анализ показывает рост интереса к растительной пище на 23% за последний месяц",
      "impact": "Потенциальное увеличение выручки на 15%",
      "confidence": 87,
      "status": "new"
    },
    {
      "type": "optimization", 
      "title": "Оптимизация времени подачи",
      "description": "Рекомендуется увеличить производство основных блюд в 11:30-12:00",
      "impact": "Сокращение очередей на 25%",
      "confidence": 92,
      "status": "applied"
    },
    {
      "type": "cost_reduction",
      "title": "Снижение пищевых отходов",
      "description": "Корректировка порций менее популярных блюд может сэкономить до 8% затрат",
      "impact": "Экономия 15,000₽ в месяц",
      "confidence": 78,
      "status": "pending"
    }
  ]
};

// Глобальные переменные для графиков
let charts = {};
let currentFilter = 'Все';

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initThemeToggle();
  initProfileDropdown();
  initMetricCounters();
  initTopDishes();
  initCharts();
  initMenuPage();
  initAIPage();
  initModal();
  initChat();
});

// Навигация
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetPage = this.dataset.page;
      
      // Убираем активный класс у всех ссылок и страниц
      navLinks.forEach(l => l.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));
      
      // Добавляем активный класс
      this.classList.add('active');
      document.getElementById(targetPage).classList.add('active');
      
      // Инициализируем графики для активной страницы
      setTimeout(() => initChartsForPage(targetPage), 100);
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
}

// Переключение темы
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  themeToggle.addEventListener('click', function() {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeToggle.textContent = '☀️';
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeToggle.textContent = '🌙';
    }
    
    // Полностью пересоздаем все графики
    setTimeout(() => {
      // Уничтожаем все существующие графики
      Object.values(charts).forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
      charts = {};
      
      // Переинициализируем графики
      initCharts();
      
      // Инициализируем графики для активной страницы
      const activePage = document.querySelector('.page.active').id;
      initChartsForPage(activePage);
    }, 100);
  });
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
  
  container.innerHTML = dishes.map(dish => `
    <div class="dish-item">
      <div class="dish-info">
        <div class="dish-name">${dish.name}</div>
        <div class="dish-category">${dish.category}</div>
      </div>
      <div class="dish-stats">
        <div class="dish-orders">${dish.orders}</div>
        <div class="dish-change ${dish.change.startsWith('+') ? 'positive' : 'negative'}">${dish.change}</div>
      </div>
    </div>
  `).join('');
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
    case 'menu':
      if (!charts.scatterChart) createScatterChart();
      break;
    case 'customers':
      if (!charts.ageChart) createAgeChart();
      if (!charts.departmentChart) createDepartmentChart();
      if (!charts.loyaltyChart) createLoyaltyChart();
      break;
    case 'forecasts':
      if (!charts.weeklyForecastChart) createWeeklyForecastChart();
      if (!charts.seasonalChart) createSeasonalChart();
      break;
  }
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
  
  const lossMakers = appData.analytics.topLossMakers;
  
  // Уничтожаем старый график если есть
  if (charts.salesChart) {
    charts.salesChart.destroy();
  }
  
  const container = ctx.parentElement;
  container.innerHTML = `
    <div class="loss-makers-list">
      ${lossMakers.map((item, index) => `
        <div class="loss-maker-item">
          <div class="loss-maker-header">
            <span class="loss-rank">#${index + 1}</span>
            <span class="loss-name">${item.name}</span>
            <span class="loss-amount">−${Math.abs(item.monthlyLoss).toLocaleString()}₽/мес</span>
          </div>
          <div class="loss-details">
            <div class="loss-cost">Себестоимость: ${item.cost}₽</div>
            <div class="loss-price">Цена: ${item.price}₽</div>
            <div class="loss-per-portion">Убыток/порция: −${Math.abs(item.lossPerPortion)}₽</div>
            <div class="loss-reason">Причина: ${item.reason}</div>
            <div class="loss-orders">Заказов: ${item.orders}</div>
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

function createWeeklyForecastChart() {
  const ctx = document.getElementById('weeklyForecastChart');
  if (!ctx) return;
  
  const forecastData = appData.forecasts.weeklyDemand;
  
  charts.weeklyForecastChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: forecastData.map(item => item.day),
      datasets: [
        {
          label: 'Прогноз',
          data: forecastData.map(item => item.predicted),
          backgroundColor: 'rgba(139, 92, 246, 0.7)',
          borderColor: '#8b5cf6',
          borderWidth: 2
        },
        {
          label: 'Факт',
          data: forecastData.map(item => item.actual),
          backgroundColor: 'rgba(6, 182, 212, 0.7)',
          borderColor: '#06b6d4',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
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
          }
        }
      }
    }
  });
}

function createSeasonalChart() {
  const ctx = document.getElementById('seasonalChart');
  if (!ctx) return;
  
  const seasonalData = appData.forecasts.seasonalTrends;
  
  charts.seasonalChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: seasonalData.map(item => item.month),
      datasets: [
        {
          label: 'Супы',
          data: seasonalData.map(item => item.soup),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Основные блюда',
          data: seasonalData.map(item => item.main),
          borderColor: '#FFC185',
          backgroundColor: 'rgba(255, 193, 133, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Салаты',
          data: seasonalData.map(item => item.salad),
          borderColor: '#B4413C',
          backgroundColor: 'rgba(180, 65, 60, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
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
          <span class="metric-number">${dish.rating}</span>
          <span class="metric-text">Рейтинг</span>
        </div>
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
      <div>
        <strong>Рейтинг:</strong><br>
        ${'⭐'.repeat(Math.floor(dish.rating))} ${dish.rating}
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

function showNotification(message) {
  // Создаем простое уведомление
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(45deg, #8b5cf6, #06b6d4);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
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
    // Здесь будет логика удаления
    console.log('Удаляем блюдо с ID:', dishId);
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