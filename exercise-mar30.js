var colors = require(`colors`);
//================================== CHAPTER 4: LOOP ============================ 
// cSpell: disable
/** Exercise 1: ORDER MANAGER 
 * Yêu cầu bài tập (Gồm 4 cấp độ):
 * * Cấp độ 1 (Duyệt mảng): Sử dụng vòng lặp để in ra tên tất cả các khách hàng đã mua hàng.
 * * Cấp độ 2 (Lọc dữ liệu): Chỉ in ra mã đơn hàng (id) của những đơn hàng có trạng thái là "completed".
 * * Cấp độ 3 (Tính toán & Logic): * Hãy tính Tổng số tiền của tất cả các đơn hàng có trạng thái "completed".
 * Nếu đơn hàng nào có amount > 1000, hãy in thêm dòng chữ: "Đơn hàng VIP: [Mã ID]".
 * * Cấp độ 4 (Tìm kiếm & Dừng): * Khách hàng tên "Chi" đang khiếu nại. Hãy dùng vòng lặp để tìm đơn hàng của "Chi".
 * Khi tìm thấy, hãy in ra toàn bộ thông tin đơn hàng đó và dừng vòng lặp ngay lập tức (không cần kiểm tra các đơn hàng phía sau nữa để tiết kiệm tài nguyên).
*/


console.log(`Exercise 1: ORDER MANAGER`.bgMagenta);
const orders = [
    { id: "ORD001", amount: 500, status: "completed", customer: "An" },
    { id: "ORD002", amount: 1200, status: "pending", customer: "Bình" },
    { id: "ORD003", amount: 7000, status: "completed", customer: "Ngân" },
    { id: "ORD004", amount: 50, status: "canceled", customer: "Chinh" },
    { id: "ORD005", amount: 3000, status: "completed", customer: "Dũng" },
    { id: "ORD006", amount: 150, status: "pending", customer: "Đạt" },
    { id: "ORD007", amount: 800, status: "completed", customer: "Hương" }
];
//Looping through an array
let customerList = [];
for (const order of orders) {
    customerList.push(order.customer);
}
console.log("- List of Buyers: " + customerList.join(", "));

// Filtering data
let idList = [];
for (const order of orders) {
    if (order.status === "completed") {
        idList.push(order.id);
    }
}
console.log("- List of completed orders: " + idList.join(", "));

// Calculations and Logic
let total = 0;
let vipOrder = [];
for (const order of orders) {
    if (order.status === "completed") {
        total += order.amount;
        if (order.amount > 1000) {
            vipOrder.push(order.id);
        }
    }
}
console.log(`- List of VIP orders: ${vipOrder}`);
console.log(`- Total of completed orders is ${total}`);

// Find & Break
let found = false;
for (const order of orders) {
    if (order.customer === "Chi") {
        console.log(`- Found order: `, order);
        found = true;
        break;
    }
}
if (!found) {
    console.log(`- Chi's order not found`);
}
// cSpell: disable
/** Exercise 2: GLOBAL CART TESTING
 * Yêu cầu bài tập (4 cấp độ):
 * * Dễ (Nested Loop): Duyệt qua toàn bộ dữ liệu và in ra tên của tất cả sản phẩm có trong mọi kiện hàng theo định dạng: [Mã Kiện Hàng] - [Tên Sản Phẩm].
 * * Thường (Data Validation): Trong quá trình duyệt, nếu phát hiện sản phẩm nào có quantity (số lượng) bằng 0, 
 * hãy in ra cảnh báo: [⚠️ WARNING] Sản phẩm [Tên Sản Phẩm] trong kiện [Mã ID] bị lỗi số lượng!.
 * * Khó (Complex Calculation): * Tính tổng giá trị của từng kiện hàng (Giá trị kiện hàng = Tổng của các price * quantity bên trong).
 * In ra kết quả: Kiện hàng [Mã ID] ở vùng [Region] có tổng giá trị là: [Tổng tiền]$.
 * * Ác Mộng (Logic Tìm kiếm nâng cao): * Tìm xem trong tất cả các kiện hàng, có sản phẩm nào tên là "Macbook" thuộc vùng "Europe" hay không?
 * Nếu có, hãy in ra: 🚩 Đã tìm thấy Macbook tại Châu Âu!.
 * Yêu cầu tối ưu: Ngay khi tìm thấy Macbook tại Châu Âu, hãy dừng toàn bộ việc kiểm tra (thoát ra khỏi tất cả các vòng lặp) 
 * để tiết kiệm thời gian chạy test.
*/
// cSpell: enable

console.log(`Exercise 2: GLOBAL CART TESTING`.bgMagenta);
const deliveryData = [
    {
        packageId: "PKG_001",
        region: "Asia",
        items: [
            { name: "iPhone 15", price: 1000, quantity: 2 },
            { name: "Mouse", price: 50, quantity: 5 }
        ]
    },
    {
        packageId: "PKG_002",
        region: "Europe",
        items: [
            { name: "MacBook", price: 2000, quantity: 1 },
            { name: "Keyboard", price: 150, quantity: 0 } // Error: quantity = 0
        ]
    },
    {
        packageId: "PKG_003",
        region: "America",
        items: [
            { name: "Screen", price: 500, quantity: 3 }
        ]
    }
];

//Level 1: Nested Loop
let productList = [];
for (const delivery of deliveryData) {
    for (const item of delivery.items) {
        productList.push(`${delivery.packageId} - ${item.name}`);
    }
}
console.log(`- Products list:`, productList.join(" | "));

//Level 2: Data Validation
let warning = [];
for (const delivery of deliveryData) {
    for (const item of delivery.items) {
        if (item.quantity === 0) {
            warning.push(`- [⚠️ WARNING]: The product '${item.name}' in package '${delivery.packageId}' has an invalid quantity (quantity = 0).`);
        }
    }
}
console.log(warning.join("\n"));

//Level 3: Complex Calculation
for (const delivery of deliveryData) {
    let packageTotal = 0;
    for (const item of delivery.items) {
        packageTotal += item.price * item.quantity;
    }
    console.log(`- Package ${delivery.packageId} in '${delivery.region}' has a total value of $${packageTotal}.`);
}

// Level 4: Advance search
let foundPro = false;
for (const delivery of deliveryData) {
    for (const item of delivery.items) {
        if (item.name === "MacBook" && delivery.region === "Europe") {
            console.log(`- ${item.name} was found in ${delivery.region}.`);
            foundPro = true;
            break;
        }
    }
    if (foundPro) {
        break;
    }
}
if (!foundPro) {
    console.log(`- MacBook was not found in Europe.`);
}

// ==================== CHAPTER 5: FUNCTION =====================
// cSpell: disable
/** Bài 1: Hàm kiểm tra độ dài mật khẩu Viết một hàm isPasswordValid(password) nhận vào một chuỗi.
 * Nếu độ dài chuỗi >= 8: trả về true.
 * Ngược lại: trả về false.
 * */
// cSpell: enable
console.log(`Exercise 3: Validation Password Strength`.bgMagenta);
// function isPasswordValid(password) {
//     if (password.length >= 8) {
//         return true
//     } else {
//         return false
//     }
//     //return password.length >= 8
// }
const isPasswordValid = (password) => password.length >= 8;
console.log(`-`, isPasswordValid("My_pass"));

// cSpell: disable
/** Bài 2: Hàm định dạng tiền tệ Viết một hàm formatPrice(amount) nhận vào một số (ví dụ: 500000) và
 * trả về chuỗi có thêm ký tự $ đằng sau (ví dụ: "500000$").
 * */
// cSpell: enable
console.log(`Exercise 4: Verify currency format`.bgMagenta);
// function formatPrice(amount) {
//     return `${amount}$`
// }
const formatPrice = (amount) => `${amount}$`;
console.log(`-`, formatPrice(50000));

// cSpell: disable
/**
Bài 3: Hàm lọc danh sách Bug (Kết hợp Loop + Array + Function) Cho một mảng các đối tượng bug:
const myBugs = [
    { id: 1, severity: "High" },
    { id: 2, severity: "Low" },
    { id: 3, severity: "High" }
];
Viết hàm getHighSeverityBugs(list) để trả về một mảng mới chỉ chứa các bug có severity là "High".
*/
// cSpell: enable
console.log(`Exercise 5: Filter Bugs`.bgMagenta);
const myBugs = [
    { id: 1, severity: "High" },
    { id: 2, severity: "Low" },
    { id: 3, severity: "High" }
];
function getHighSeverityBugs(list) {
    let highSeverityBugs = [];
    for (const bug of list) {
        if (bug.severity === "High") {
            highSeverityBugs.push(bug);
        }
    }
    return highSeverityBugs;
}
console.log(`-`, getHighSeverityBugs(myBugs));

//========================CHAPTER 6: CONVENTION ====================
// cSpell:disable
/** Refactoring Code 
 * sửa lại đoạn code "thảm họa" sau đây cho đúng Convention:
 * const base_url = "https://google.com"
 * let Isvisible = true
 * function DANGNHAP(u,p) 
 * {
 * let Error_message = "fail";
 * console.log(Error_message)
 * }
 */
const BASE_URL = 'https://google.com';
let isVisible = true;
function dangNhap (u,p){
    let errorMessage = 'fail';
    console.log(errorMessage)
}


/** Bài 1: Chỉnh lại đoạn code dưới đây cho đúng convention
 * const Url_DANG_NHAP = "https://test-site.com/login"
 * let Kiemtra_button = true
 * var user = "admin_01"
 * function Kiem_Tra_Login(U, P){
 * if(U === "admin"){
 * console.log("Welcome")
 * }else{
 * let ERROR_MSG = "Sai pass rùi"
 * console.log(ERROR_MSG)
 * }
 * }
 */

const DANG_NHAP_URL = 'https://test-site.com/login';
let kiemTraButton = true;
var user = 'admin_01';
function kiemTraLogin (u, p){
    if(u === 'admin'){
        console.log(`Welcome`)
    }else {
        let errorMessage = 'Sai pass rùi';
        console.log(errorMessage);
    }
}

/**
 * Bài 2: Thiết kế "Bộ khung" Dữ liệu (Data Architect)
 * Bạn đang xây dựng một dự án Automation cho một trang web bán điện thoại. 
 * Yêu cầu: 
 * * 1. Khai báo một hằng số lưu thời gian chờ mặc định (Timeout) là 5000ms. 
 * * 2. Tạo một danh sách (Array) chứa 3 đối tượng (Object) sản phẩm. 
 * Mỗi đối tượng phải có: id, tên sản phẩm, giá tiền, và trạng thái còn hàng. 
 * Lưu ý quan trọng: Tất cả tên biến, tên thuộc tính phải đặt theo chuẩn camelCase, tên hằng số theo UPPER_SNAKE_CASE. 
 * Tên phải bằng tiếng Anh chuyên ngành (ví dụ: isStocked hoặc inStock thay vì conHang).
 */
const TIMEOUT = 5000;
const productsList = [
    {id: "product_ID1", name: "product_Name1", price: 1000, status: "inStock"},
    {id: "product_ID2", name: "product_Name2", price: 2000, status: "outStock"},
    {id: "product_ID3", name: "product_Name3", price: 3000, status: "inStock"}
];

/** ============================== CLASS ASSIGNMENTS ========================== */
// cSpell: disable

// ========= Thực hành: "Automation Script Simulator"=========
/** Bài tập 1: Quét qua danh sách lỗi Cho mảng
const bugs = ["Bug 1", "Bug 2", "Bug 3", "Bug 4"];
Hãy dùng vòng lặp for để in ra: Đang xử lý Bug 1 Đang xử lý Bug 2...*/

// const bugs = ["Bug 1", "Bug 2", "Bug 3", "Bug 4"]
// console.log(`Bài 1:  Quét qua danh sách lỗi cho mảng`.yellow)
// for (const item of bugs) {
//     console.log(`Đang xử lý ${item}`)
// }
/** Bài tập 2: Tìm kiếm dữ liệu (Dùng break) Cho mảng
const names = ["Luke", "Diện", "Điểm", "Trâm", "Ngân"]; Hãy dùng vòng lặp để tìm tên "Ngân".
Khi thấy tên "Ngân", in ra "Đã tìm thấy Ngân!" và dừng vòng lặp ngay lập tức.*/

// const names = ["Luke", "Diện", "Điểm", "Trâm", "Ngân"]
// console.log(`Bài 2: Tìm kiếm dữ liệu cho mảng`.yellow)
// for (const item of names) {
//     if (item === "Ngân") {
//         console.log(`Đã tìm thấy Ngân ở vị trí thứ ${names.indexOf("Ngân")}`)
//         break
//     }
// }

/** Bài tập 3: Data Driven nâng cao (Object + Array + Loop) Cho danh sách tài khoản:
const users = [
    { name: "User 1", status: "Active" },
    { name: "User 2", status: "Inactive" },
    { name: "User 3", status: "Active" }
];
Hãy dùng vòng lặp for...of để in ra tên của những User có trạng thái là "Active".*/
// const users = [
//     { name: "User 1", status: "Active" },
//     { name: "User 2", status: "Inactive" },
//     { name: "User 3", status: "Active" }
// ]
// console.log(`Bài 3:  Data Driven nâng cao (Object + Array + Loop)`.yellow)
// for (const acc of users) {
//     if (acc.status === "Active") {
//         console.log(`The user with an active status is ${acc.name}`)
//     }
// }