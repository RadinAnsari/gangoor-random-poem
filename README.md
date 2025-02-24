![gdap](https://github.com/user-attachments/assets/5640fc1b-33f3-40c2-956f-ca36b822a0a6)
# ganjoor-random-poem




## 📖 Description
Nodejs package to get random poem from persian poets . This package made from gangoor Api.


## 🚀 Features
- Get random poem of a specific poets in persian.
- Get poem summary
- The meaning of each poem
- If poet not choosen , by default a random poet will choosen ! 

---

## 📦 Installation
You can install this package using **npm**:

```sh
npm install ganjoor-random-poem

```

or clone the repository manually:

```sh
git clone https://github.com/RadinAnsari/ganjoor-random-poem.git
cd ganjoor-random-poem
```

---

## 📚 Usage
### Import the module and Get poems :
```javascript
const { getRandomPoem } = require('ganjoor-random-poem');


async function displayPoem() {
  const {fullTitle,plainText,poemSummary} = await getRandomPoem();  //getRandomPoem("مولانا")
  
  console.log(` Poem title: ${fullTitle}`); // title of the poem 
  console.log(`Poem : ${plainText}`); // poem text also you can use ${htmlText} in html format
  console.log(`PoemSummary : ${poemSummary}`); // poemSummary
 
}

displayPoem();


```


---

## 🔧 API

### `getRandomPoem(name)`
Returns a **poem** of poet  in the given name poet.
name can not choosen , then name of poet will choose randomly.

#### **Parameters:**
| Parameter    | Type     | Description                           |
|-------------|---------|---------------------------------------|
| `name` | `string` | The name of the poet . |

#### **Properties:**
| name    | Type     | Description                           |
|-------------|---------|---------------------------------------|
| `fullTitle` | `string` | Title of the poem  . |
| `plainText` | `string` | Poem text as plain format . |
| `htmlText` | `string` | Poem text as html format  . |
| `verses` | `array object` | The meaning of each poem  . |



#### **List of poets you can use ! :**
| Name |
| --- | 
| حافظ |
 | خیام |
  |ابوسعید ابوالخیر |
 صائب 
 سعدی
باباطاهر 
مولوی
اوحدی
خواجو
شهریار 
عراقی
فروغی بسطامی 
سلمان ساوجی
محتشم کاشانی 
امیرخسرو دهلوی
سیف فرغانی 
عبید زاکانی 
هاتف اصفهانی
یا رهی معیری


if you dont choose poet name, it will choose random ! 

---



## 📜 License
This project is licensed under the **MIT License**.

---

## 🌟 Contributing
Pull requests are welcome! Feel free to **fork** this repo and submit improvements.

For major changes, please open an **issue** first to discuss what you'd like to change.

---

## 📬 Contact
- GitHub: [RadinAnsari](https://github.com/RadinAnsari)
- Email: gently.crow@gmail.com







