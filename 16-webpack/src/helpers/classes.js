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

export {Student, ostap};
