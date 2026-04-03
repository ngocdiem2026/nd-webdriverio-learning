// ==================== HOMEWORK ================================= 
// cSpell:disable
/**Bài 1: Kiểm tra kết quả Test Khai báo biến actualResult = "Login Success" và expectedResult = "Login Success". 
 * Hãy dùng if...else để in ra "PASSED" nếu hai biến bằng nhau, ngược lại in ra "FAILED".
*/
// cSpell:enable

var colors = require('colors')
const actualResult = "Login success"
const expectedResult = "Login Success"
if (actualResult === expectedResult) {
    console.log("Exercise 1: " + `PASSED`.green)
} else {
    console.log("Exercise 1: " + `FAILED`.red)
}

// cSpell:disable
/** Bài 2: Phân loại mức độ lỗi (Bug Severity) Cho một biến bugPriority có giá trị từ 1 đến 3.
- Nếu là 1: In ra "Blocker - Sửa ngay!".
- Nếu là 2: In ra "High - Cần sửa trong sprint".
- Nếu là 3: In ra "Low - Sửa sau". (Gợi ý: Dùng if...else if...else hoặc switch...case).
*/
// cSpell:enable

const bugPriority = 2
switch (bugPriority) {
    case 1:
        console.log(`Exercise 2: Blocker - Immediate fix required!`.bgRed)
        break
    case 2:
        console.log(`Exercise 2: High - Fix in this sprint.`.magenta)
        break
    case 3:
        console.log(`Exercise 2: Low - Can be fixed later.`.grey)
        break
    default:
        console.log(`Exercise 2: There are no Blocker, High, or Low bugs.`.bgGreen)
}

// cSpell:disable
/** Bài 3: Kiểm tra điều kiện Coupon Một mã giảm giá chỉ áp dụng nếu: totalBill > 500 VÀ isMember === true. 
 * Hãy viết code để kiểm tra xem khách hàng có được giảm giá không.
*/
// cSpell:enable

let totalBill = 500
let isMember = true
let coupon
if (totalBill > 500 && isMember) {
    coupon = "Customer belongs to a discount group"
} else {
    coupon = "Customer does NOT belongs to a discount group"
}
console.log(`Exercise 3: ${coupon}`.yellow)

// cSpell:disable
/** Bài 4: Câu hỏi tình huống: Bạn lấy được số lượng sản phẩm từ Website là chuỗi "5".
 *  Bạn muốn kiểm tra xem nó có lớn hơn 0 hay không. Bạn nên dùng cách nào an toàn nhất? 
 * (Gợi ý: Ép kiểu về Number trước khi so sánh === hay cứ dùng > 0?) 
*/
// cSpell:enable

const productCountText = " 5 "
const productCount = Number(productCountText.trim());
if (!Number.isNaN(productCount) && productCount > 0) {
    console.log("Exercise 4: The number of products is greater than 0.")
} else {
    console.log("Exercise 4: Invalid or less than 0")
}
console.log(` ==> To check if a string like '5' is greater than 0, the safest approach is to explicitly parse it into an integer first. 
This prevents any unexpected behavior during the comparison.`.blue)


/** =========================== CLASS ASSIGNMENTS ====================================
// cSpell:disable
/** Bài tập 1: Quản lý danh sách lỗi (Array)
- Tạo mảng bugList chứa 3 lỗi: "Lỗi giao diện", "Lỗi API", "Lỗi Logic".
- Dùng lệnh để thêm lỗi "Lỗi bảo mật" vào cuối danh sách.
- Xóa lỗi đầu tiên ra khỏi mảng.
- In ra màn hình: "Danh sách hiện có [số lượng] lỗi".
 
const bugList = ["UI bug", "API bug", "Logic bug"]
bugList.push("Security bug")
bugList.shift()
console.log(`Test 1: The current list contains ${bugList.length} bugs`)

/**Bài tập 2:  Quản lý thông tin cấu hình (Object)
- Tạo một Object config bao gồm: browser: "Chrome", headless: false, retries: 2.
- Hãy đổi headless thành true.
- Thêm một thuộc tính mới là screenshot: "on-failure".
- In toàn bộ Object config ra màn hình.
 
const config = {
    browser: "Chrome",
    headless: false,
    retries: 2
}
config.headless = true
config.screenshot = "on-failure"
console.log("Test 2: Configuration Information")
console.log(config)
*/
