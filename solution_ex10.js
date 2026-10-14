/**
 * Bài tập: Phân tích Trade-off Menu Nguyên khối vs Modular Function
 * Tên file: solution_ex10.js
 * Môn học: [RL-IT103B-K25] - Xây dựng ứng dụng web với Javascript
 */

// ========================================== 
// 1. CÁC HÀM MÔ-ĐUN HÓA ĐỘC LẬP (Modular Functions)
// Tuân thủ nguyên lý Đơn nhiệm (SRP)
// ========================================== 

function handleAddUser() {
    console.log('-> Đang thực thi chức năng: Thêm người dùng mới...');
    // Logic thêm dữ liệu tại đây
    return { success: true, message: 'Thêm thành công!' };
}

function handleUpdateUser() {
    console.log('-> Đang thực thi chức năng: Cập nhật thông tin người dùng...');
    // Logic sửa dữ liệu tại đây
    return { success: true, message: 'Cập nhật thành công!' };
}

function handleDeleteUser() {
    console.log('-> Đang thực thi chức năng: Xóa người dùng...');
    // Logic xóa dữ liệu tại đây
    return { success: true, message: 'Xóa thành công!' };
}

function handleViewReports() {
    console.log('-> Đang thực thi chức năng: Xuất báo cáo hệ thống...');
    // Logic báo cáo tại đây
    return { success: true, message: 'Xuất báo cáo thành công!' };
}

// ========================================== 
// 2. HÀM ĐIỀU HƯỚNG MENU (Router Switch-Case thu gọn)
// Khối switch cực kỳ ngắn gọn, chỉ gọi các hàm mô-đun
// ========================================== 

function processMenuChoice(choice) {
    switch (choice) {
        case '1':
            handleAddUser();
            break;
        case '2':
            handleUpdateUser();
            break;
        case '3':
            handleDeleteUser();
            break;
        case '4':
            handleViewReports();
            break;
        case '5':
            console.log('Thoát chương trình. Hẹn gặp lại!');
            break;
        default:
            console.log('Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 5.');
            break;
    }
}

// Mô phỏng chạy chương trình
console.log('=== HỆ THỐNG MENU CLI ĐÃ KHỞI ĐỘNG ===');
processMenuChoice('1');
processMenuChoice('4');
