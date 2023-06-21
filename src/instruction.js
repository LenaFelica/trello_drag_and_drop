// import { useState } from 'react';
// import './App.css';

// function App() {

//   const [boards, setBoards] = useState([
//    {id: 1, title: 'Сделать', items: [{id: 1, title: 'Пойти в бассейн'}, {id: 2, title: 'Дописать проект'}, {id: 3, title: 'Закомитить задачи'}]},
//    {id: 2, title: 'Проверить', items: [{id: 4, title: 'Код ревью'}, {id: 5, title: 'Задача на факториал'}, {id: 6, title: 'Задача хэш таблица'}]},
//    {id: 3, title: 'Сделано', items: [{id: 7, title: 'Снять видео'}, {id: 8, title: 'Смонтировать'}, {id: 9, title: 'Поесть'}]},
//   ])
// //* запоминаем не только задачу, но и доску, с которой эта задача была снята:
//   const [currentBoard, setCurrentBoard] = useState(null)
//   const [currentItem, setCurrentItem] = useState(null)

//   function dragOverHandler(e) {
//      e.preventDefault()
//      //* подсвечиваем элемент - добавляем тень
//      //* если классовое имя == item, то под это элемент будем добавлять снизу тень
//      if(e.target.className == 'item') {
//        e.target.style.boxShadow = '0 4px 3px rgb(148, 121, 164)'
//      }
//   }

//   function dragLeaveHandler(e) {
//    //* тень исчезает
//       e.target.style.boxShadow = 'none'

//   }
// //* в dragStart сохраняем екущую доску и текущую задачу  
//   function dragStartHandler(e, board, item) {
//       setCurrentBoard(board)
//       setCurrentItem(item)
//   }

//   function dragEndHandler(e) {
//    //* тень исчезает
//    e.target.style.boxShadow = 'none'

//   }
// //* здесь получаем index в массиве у текущей карточки
// //* этот индекс необходи для того, чтобы мы могли удалить элемент из массива (splice)
// //* то есть, мы его взяли и перекидываем в другой элемент!
// //* и тут же по аналогии получаем индекс элемента, над которым мы дерим карточку
//   function dropHandler(e, board, item) {
//      e.preventDefault()
//      const currentIndex = currentBoard.items.indexOf(currentItem)
//      currentBoard.items.splice(currentIndex, 1)
//      const dropIndex = board.items.indexOf(item)
//      //* + 1 - потому что будем вставлять после этой задачи, удаленных 0, задача. которую хотим вставить:
//      board.items.splice(dropIndex + 1, 0, currentItem)
//      //* исходны массив изменили, но не будет ререндеренга, пока не изменим само состояние:
//      //* делаем 2 проверки - заенили старые доски на измененные!
//      //* будем передавать текущий массив досок, но измененный с помощью функции map
//      setBoards(boards.map(b => {
//          if(b.id === board.id) {
//             return board; //возвращае измененные доски
//          }
//          if(b.id === currentBoard.id) {
//             return currentBoard; //возвр измененные доски
//          }
//          return b; //возвращаем элемент итерации
//      }))
//   }

//   return (
//    <>
//    <h1 className="text">Доска задач</h1>   
//     <div className="app">   
    
//       {boards.map(board => 
//          <div className="board">
            
//             <div className="board__title">{board.title}</div>
//             {board.items.map(item =>
//                <div 
//                   onDragOver={(e) => dragOverHandler(e)}
//                   onDragLeave={(e) => dragLeaveHandler(e)}
//                   onDragStart={(e) => dragStartHandler(e, board, item)}
//                   onDragEnd={(e) => dragEndHandler(e)}
//                   onDrop={(e) => dropHandler(e, board, item)}
//                   draggable={true}
//                   className="item"
//                >
//                   {item.title}
//                </div>
//             )}
//          </div>
//          )}
//     </div>
//     </>
//   );
// }

// export default App;
