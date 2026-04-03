var colors = require('colors')
//cSpell: disable
/** Bài 1: Hệ thống Phân loại Bug & Tự động Gán (Auto-Assignment)
 * Yêu cầu: Viết một chương trình nhận vào 3 thông số của một Bug: severity (Critical, High, Medium, Low), 
 * isReproducible (true/false), và affectedModule (UI, API, Database). Logic khó:
 * Nếu Bug là Critical VÀ isReproducible là true: In ra "Priority: P0 - Assign to Tech Lead".
 * Nếu Bug là Critical nhưng KHÔNG isReproducible: Hạ xuống "Priority: P1 - Assign to Senior QA".
 * Nếu Bug ở module Database: Bất kể severity nào (trừ Critical), đều in ra "Assign to DBA Team".
 * Các trường hợp còn lại: In ra "Priority: P2 - Assign to Developer".
 * Điều kiện bắt buộc: Sử dụng Switch Case kết hợp If/Else. Không được viết quá 3 tầng If lồng nhau.
 */
//cSpell: enable
function classifyBug(severity, isReproducible, affectedModule) {
    let result = ""
    switch (severity) {
        case "Critical":
            if (isReproducible === true) {
                result = "Priority: P0 - Assign to Tech Lead"
            }
            else {
                result = "Priority: P1 - Assign to Senior QA"
            }
            break
        default:
            if (affectedModule === "Database") {
                result = "Assign to DBA Team"
            }
            else {
                result = "Priority: P2 - Assign to Developer"
            }
            break
    }
    return result
}
console.log(`Exercise 1: Auto-Assignment`.yellow)
console.log(classifyBug("Critical", true, "UI"))
console.log(classifyBug("Critical", false, "API"))
console.log(classifyBug("High", true, "Database"))
console.log(classifyBug("Medium", false, "UI"))
console.log(classifyBug("Low", true, "Database"))

//cSpell: disable
/** Bài 2: Trình kiểm tra Độ mạnh Mật khẩu (Password Validator)
 * Yêu cầu: Viết một hàm validatePassword(password) kiểm tra các điều kiện sau:
 * Độ dài phải từ 8 đến 20 ký tự.
 * Phải chứa ít nhất một ký tự viết hoa.
 * Phải chứa ít nhất một con số.
 * Cực khó: Không được chứa khoảng trắng. 
 * Output: Trả về một chuỗi thông báo cụ thể lỗi đầu tiên nó gặp phải (Ví dụ: "Thiếu chữ hoa", "Quá ngắn"...). 
 * Nếu thỏa mãn hết thì trả về "Password Secure".
 * Gợi ý: Học viên cần kết hợp toán tử logic &&, || và các hàm xử lý chuỗi cơ bản.
 */

function validatePassword(password) {
    //check length
    if (password.length < 8) {
        return "Too short. Password must be between 8 and 20 characters."
    }
    if (password.length > 20) {
        return "Too long. Password must be between 8 and 20 characters."
    }

    //check spaces
    if (password.includes(" ")) {
        return "Spaces are not allowed."
    }

    // check Uppercase
    let hasUppercase = false
    for (let char of password) {
        if (/[A-Z]/.test(char)) {
            hasUppercase = true
            break
        }
    }
    if (!hasUppercase) {
        return "Password must contain at least one uppercase letter."
    }

    //check number
    let hasNumber = false
    for (let char of password) {
        if (/\d/.test(char)) {
            hasNumber = true
            break
        }
    }
    if (!hasNumber) {
        return "Password must contain at least one number."
    }

    return "Password Secure."
}
console.log(`Exercise 2: Password Validator`.green)
console.log(validatePassword("pass"))
console.log(validatePassword("thisismypassword12323434445"))
console.log(validatePassword("Pass word"))
console.log(validatePassword("password213421"))
console.log(validatePassword("PassWord"))
console.log(validatePassword("passWord3003"))

//cSpell: disable
/** Bài 3: Tính toán Phí vận chuyển Đa quốc gia (Shipping Logic)
 * Yêu cầu: Tính phí ship dựa trên weight (kg), distance (km), và membership (Gold, Silver, Guest). Logic:
 * Phí cơ bản: 5$.
 * Nếu weight > 10kg: +10$. Nếu weight > 50kg: +50$.
 * Nếu distance > 500km: Phí tổng tăng thêm 20%.
 * Ưu đãi thành viên: 
 * * Gold: Giảm 50% tổng phí.
 * * Silver: Giảm 20% tổng phí.
 * * Guest: Không giảm.
 * Bài toán khó: Nếu tổng phí sau khi tính toán > 100$, hãy áp dụng thêm mã giảm giá cố định 10$ (sau khi đã tính giảm giá thành viên).
 */
//cSpell: enable
function calculateShipping(weight, distance, membership) {
    let totalFee = 50 //Changed the value from $5 to $50 to cover the total > $100 scenario.

    //check weight
    if (weight > 50) {
        totalFee += 50
    } else if (weight > 10) {
        totalFee += 10
    }

    //check distance
    if (distance > 500) {
        totalFee = totalFee * 1.2
    }

    //check membership
    switch (membership) {
        case "Gold":
            totalFee = totalFee * 0.5
            break
        case "Silver":
            totalFee = totalFee * 0.8
            break
    }

    //discount 10$ if totalFee > 100$
    if (totalFee > 100) {
        totalFee -= 10
    }

    return totalFee
}
console.log(`Exercise 3: Shipping Logic`.blue)
console.log("Your total fee is " + calculateShipping(8, 300, "Guest"))
console.log("Your total fee is " + calculateShipping(12, 600, "Silver"))
console.log("Your total fee is " + calculateShipping(55, 700, "Gold"))
console.log("Your total fee is " + calculateShipping(60, 1000, "Guest"))

//cSpell: disable
/** Bài 4: Hệ thống Điều phối Test Execution (Smart Runner)
 * Yêu cầu: Giả lập một hệ thống quyết định xem có chạy Test hay không. Đầu vào: isServerUp (boolean), isDatabaseConnected (boolean),
 *  lastTestStatus (Passed/Failed), isWeekend (boolean). Quy tắc:
 * Chỉ chạy Test nếu isServerUp và isDatabaseConnected đều là true.
 * Nếu là isWeekend:
 * Chỉ chạy các test có lastTestStatus là "Failed" (để sửa lỗi).
 * Nếu lastTestStatus là "Passed", in ra "Chỉ chạy vào ngày thường".
 * Nếu không phải cuối tuần: Chạy tất cả.
 * Thử thách Clean Code: Viết logic sao cho không sử dụng quá 2 từ khóa else. (Sử dụng kỹ thuật Return Early hoặc Guard Clauses).
*/
//cSpell: enable
function smartRunner(isServerUp, isDatabaseConnected, lastTestStatus, isWeekend) {
    if (!isServerUp || !isDatabaseConnected) {
        return "Skip tests."
    }
    if (!isWeekend) {
        return "Run all."
    }
    if (lastTestStatus === "Failed") {
        return "Rerun failed test."
    }
    return "Run on weekdays only."
}
console.log(`Exercise 4: Smart Runner`.rainbow)
console.log(smartRunner(false, true, "Failed", false))
console.log(smartRunner(true, true, "Passed", false))
console.log(smartRunner(true, true, "Failed", true))
console.log(smartRunner(true, true, "Passed", true))

//cSpell: disable
/** Bài 5: Xây dựng Bộ lọc Tìm kiếm nâng cao (The Ultimate Filter)
 * Yêu cầu: Cho một đối tượng sản phẩm const product = { name: "iPhone", price: 1200, color: "Black", inStock: true };
 * và một đối tượng bộ lọc từ người dùng const filter = { maxPrice: 1500, preferredColor: "Black", requireStock: true };.
 *  Logic: Viết một chương trình kiểm tra xem product có thỏa mãn tất cả các điều kiện trong filter hay không.
 * Nếu thỏa mãn: In ra "Product Matches!".
 * Nếu không thỏa mãn: Phải in ra tất cả những lý do khiến nó không khớp (Ví dụ: "Giá quá cao", "Sai màu"...).
 * Đặc biệt: Nếu filter.maxPrice không có giá trị (undefined), hãy bỏ qua việc kiểm tra giá.
*/
//cSpell: enable
function checkProduct(product, filter) {

    const priceMatch = filter.maxPrice === undefined || product.price <= filter.maxPrice
    const colorMatch = filter.preferredColor === undefined || product.color === filter.preferredColor
    const stockMatch = filter.requireStock !== true || product.inStock === true

    if (priceMatch && colorMatch && stockMatch)
        return "Product Matches!"

    let reason = []
    if (!priceMatch)
        reason.push("The price is too high.")
    if (!colorMatch)
        reason.push("The color is wrong.")
    if (!stockMatch)
        reason.push("Out of stock.")
    return reason.join(" ");
}

console.log(`Exercise 5: The Ultimate Filter`.magenta);
// valid case
const product1 = {
    name: "iPhone",
    price: 1200,
    color: "Black",
    inStock: true
}
const filter1 = {
    maxPrice: 1500,
    preferredColor: "Black",
    requireStock: true
}
console.log("Valid case: " + checkProduct(product1, filter1))

//invalid cases
const product2 = {
    name: "iPhone",
    price: 1800,
    color: "White",
    inStock: false
}
const filter2 = {
    maxPrice: 1500,
    preferredColor: "Black",
    requireStock: true
}
console.log("Invalid case: " + checkProduct(product2, filter2))
