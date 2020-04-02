// 1. Cho người dùng nhập vào số bất kỳ.
//    Kiểm tra xem số có âm hay không
//    Nếu âm => print(invalid input)
//    Nếu dương => Tính giai thừa của số đó và in ra

// let a = Number(prompt("nhap so bat ki ")); 
// if(a < 0){
//     console.log("invalid input");
// } else {
//     let result = 1;
//     for (let index = 0; index <= a ;index++){
//     result = result + 1;
// }
//     console.log(result)
// }

// 2. Cho người dùng nhập vào name + age
// Nếu tuổi < 18 => print(name chưa đủ tuổi vào trang web này)
// Nếu tuổi >=18 => tiếp tục hỏi: name có muốn đăng nhập vào trang web này không
//                              : nếu câu trả lời = yes => print(name đã vào trang web thành công)
//                              : nếu câu trả lời = no  => print(name thoát khỏi trang web)

// let a = Number(prompt(" nhap so tuoi "));
// let b = prompt(" Ten cua ban ");
// if ( a < 18 ){
//     console.log (` ${b} dung chua du tuoi vao web `);
// } else {
//     let confirm = prompt(` ${b} co muon dang nhap vao trang web nay ` ); 
//  if (confirm === ` yes ` ) {
//      console.log (`${b} da truy cap thanh cong `)
//  } else if (confirm === ` no `) {
//     console.log (` ${b} da thoat khoi trang web`)
//  }
//  else {
//     console.log(` ban dz vl `)
//  }
// } 

// 3. Cho người dùng nhập vào username + password,
//    Tạo một biến username2 và password2 tạm thời ở code
//    Kiểm tra username === username2 và password === password2
//    Nếu cả 2 đều giống => print(đăng nhập thành công)
//    Nếu một trong 2 sai => print(username sai: nếu username sai) hoặc print(password sai: nếu pass sai)

// let username = prompt(` nhap username`);
// let password = prompt(` nhap password`);
// const username2 = " thangpehb123 ";
// const password2 = " bietlamgi12 ";
// if (username === username2 && password === password2) {
//   console.log(`dang nhap thanh cong`);
// } else if (username !== username2 && password === password2) {
//   console.log(`username sai`);
// } else if (username === username2 && password !== password2) {
//   console.log(`password sai`);
// } else {
//   console.log(`username va password sai`);
// }


// 4. Tìm hiểu các lấy thứ, ngày, tháng và câu lệnh switch/case trong javascript (google)
// Cho người dùng nhập vào tháng sinh(month) và name
// Nếu sinh 1,2,3 => name sinh vào mùa xuân
// Nếu sinh 4,5,6 => name sinh vào mùa hạ
// Nếu sinh 7,8,9 => name sinh vào mùa thu
// Nếu sinh 10,11,12 => name sinh vào mùa đông
// Nhập các trường hợp khác không hợp lệ => input không hợp lệ


// let month = parseInt(prompt(`nhap month ?`));
// let name = prompt(`nhap name?`);
// if (month === 1 || month === 2 || month === 3) {
//   console.log(`${name} sinh vao mua xuan`);
// } else if (month === 4 || month === 5 || month === 6) {
//   console.log(`${name} sinh vao mua ha`);
// } else if (month === 7 || month === 8 || month === 9) {
//   console.log(`${name} sinh vao mua thu`);
// } else if (month === 10 || month === 11 || month === 12) {
//   console.log(`${name} sinh vao mua dong`);
// } else {
//   console.log(`input khong hop le`);
// }


// 5. Cho người dùng nhập vào 3 tham số a, b, c của một phương trình bậc 2=> Tìm nghiệm của phương trình đó
// (sử dụng câu lệnh if/else)
// Sau khi in ra nghiệm thì tiếp tục hỏi người dùng có muốn sử dụng chương trình tiếp không
// Nếu yes => Ứng dụng vòng lặp while cho chương trình chạy tiếp
// Nếu no  => Dừng chương trình

// let loop = 'yes';

// while (loop === 'yes') {
//     let a = parseInt(prompt('Please enter a: '));
//     let b = parseInt(prompt('Please enter b: '));
//     let c = parseInt(prompt('Please enter c: '));
//     if (a === 0) {
//         console.log('Không phải phương trình bậc 2.');
//     } else {
//         let delta = b * b - 4 * a * c;
//         if ( delta < 0) {
//             console.log('PT vô nghiệm');
//         } else if (delta === 0) {
//             let result = -b / (2 * a);
//             console.log(`PT có nghiệm kép: x1 = x2 = ${result}`);
//         } else {
//             let result1 = (-b - Math.sqrt(delta)) / (2 * a);
//             let result2 = (-b + Math.sqrt(delta)) / (2 * a);
//             console.log(`PT có 2 nghiệm x1 = ${result1}; x2 = ${result2}`);
//         }
//     }
//     loop = prompt('Bạn có muốn sử dụng chương trình tiếp không.');    
// }

// 6. Cách truy cập vào từng phần tử của 1 chuỗi
// VD: const randomString = "Hello World";
// console.log(randomString[0]) => // in ra chữ "H"
// console.log(randomString[1]) => // in ra chữ "e"
// console.log(randomString[2]) => // in ra chữ "l"
// chỉ số bắt đầu của chuỗi randomString là 0 và kết thúc = randomString.length - 1
// .length lấy ra độ dài của chuỗi đó
// let loop = 'yes';

// while (loop === 'yes') {
//     let userString = prompt('Please enter a string: ');
//     let revertString = userString.split('').reverse().join('');
//     console.log(revertString);
//     loop = prompt('Bạn có muốn tiếp tục nữa không.');
// }
// Ứng dụng kiến thức trên cho:

// Viết 1 chương trình cho người dùng nhập vào 1 chuỗi bất kỳ
// In ra chuỗi đó theo dạng ngược lại
// Sau khi in ra tiếp tục hỏi người dùng có muốn tiếp tục chương trình
// Nếu yes => dùng vòng lặp while để tiếp tục chương trình
// Nếu no => dừng chương trình