class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marksArray = [];
    this.dismissed = false;
  }

  get marks() {
    if (this.dismissed) {
      return null;
    }

    return this.marksArray;
  }

  set marks(mark) {
    if (this.dismissed) {
      return console.log(null);
    }
    this.marksArray = [...this.marksArray, mark];
  }
  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  getAverageMark() {
    const sum = this.marksArray.reduce((sum, number) => {
      return sum + number;
    }, 0);

    return +(sum / this.marksArray.length).toFixed(2);
  }

  dismiss() {
    this.dismissed = true;
  }

  recover() {
    this.dismissed = false;
  }

}

const ostap = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Бендер');
//Додаєм Остапу оцінки
ostap.marks = 5;
ostap.marks = 4;
ostap.marks = 4;
ostap.marks = 5;

console.log('1.', ostap.getInfo());
console.log('2.', ostap.marks);
console.log('3.', ostap.marks = 5);
console.log('4.', ostap.marks);
console.log('5', ostap.getAverageMark());

//Звільняєм Остапа
ostap.dismiss();
console.log('6.', ostap.marks);

//Поновлюєм Остапа
ostap.recover();
console.log('7.', ostap.marks);

// Студент з стипендією
class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if (!this.dismissed && this.getAverageMark() >= 4) {
      console.log('Ви отримали 1400 грн. стипендії');
    }
  }
}

const john = new BudgetStudent('Вища Школа', '5', 'Іван Сіно');
john.marks = 3;
john.marks = 5;
