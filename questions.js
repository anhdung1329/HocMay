const questionBank = [
    {
        id: 1,
        chapter: 1,
        question: "1.1. Theo định nghĩa của Arthur Samuel (1959), học máy có thể được mô tả như thế nào?",
        options: [
            "Là quá trình xây dựng các chương trình máy tính có thể học từ dữ liệu mà không cần thay đổi cấu trúc của chương trình.",
            "Là ngành khoa học mà máy tính có thể học từ kinh nghiệm mà không cần lập trình cụ thể cho từng nhiệm vụ.",
            "Là một phương pháp để cải thiện hiệu suất trong các nhiệm vụ cụ thể thông qua việc học từ dữ liệu.",
            "Là sự phát triển của các hệ thống máy tính có khả năng học và cải thiện hiệu suất trong một nhiệm vụ đã xác định."
        ],
        answer: "Là ngành khoa học mà máy tính có thể học từ kinh nghiệm mà không cần lập trình cụ thể cho từng nhiệm vụ."
    },
    {
        id: 2,
        chapter: 1,
        question: "1.2. Định nghĩa của Tom Mitchell (1997) về học máy nhấn mạnh điều gì?",
        options: [
            "Học từ dữ liệu để cải thiện hiệu suất trong một nhiệm vụ cụ thể.",
            "Học từ trải nghiệm thực tiễn để cải thiện chiến lược trong các trò chơi.",
            "Xây dựng các chương trình máy tính có khả năng học từ dữ liệu mà không cần thay đổi mã nguồn.",
            "Tự động hóa quá trình học mà không yêu cầu lập trình chi tiết cho từng nhiệm vụ."
        ],
        answer: "Học từ dữ liệu để cải thiện hiệu suất trong một nhiệm vụ cụ thể."
    },
    {
        id: 3,
        chapter: 1,
        question: "1.3. Định nghĩa của Pedro Domingos (2015) về học máy tập trung vào điều gì?",
        options: [
            "Học từ dữ liệu để cải thiện hiệu suất trong các nhiệm vụ cụ thể.",
            "Xây dựng các chương trình máy tính có khả năng học từ dữ liệu mà không cần thay đổi cấu trúc của chương trình.",
            "Cải thiện chiến lược chơi qua việc học từ kinh nghiệm thực tiễn.",
            "Tự động hóa quá trình học mà không cần lập trình chi tiết cho từng nhiệm vụ cụ thể."
        ],
        answer: "Xây dựng các chương trình máy tính có khả năng học từ dữ liệu mà không cần thay đổi cấu trúc của chương trình."
    },
    {
        id: 4,
        chapter: 1,
        question: "1.4. Hội nghị Dartmouth năm 1956 có vai trò gì trong lịch sử học máy?",
        options: [
            "Đề xuất thuật ngữ “học máy” lần đầu tiên.",
            "Khởi xướng nghiên cứu về trí tuệ nhân tạo và đặt nền móng cho học máy.",
            "Giới thiệu thuật toán học sâu đầu tiên.",
            "Xác định các mô hình mạng nơ-ron cơ bản."
        ],
        answer: "Khởi xướng nghiên cứu về trí tuệ nhân tạo và đặt nền móng cho học máy."
    },
    {
        id: 5,
        chapter: 1,
        question: "1.5. Trong thập niên 1980, thuật toán nào được phát triển và đóng góp quan trọng vào lĩnh vực học máy?",
        options: [
            "Mạng nơ-ron hồi tiếp (RNN).",
            "Hồi quy logistic.",
            "Support Vector Machines (SVM).", // Đáp án C nhưng nội dung trong file gốc vị trí này là SVM (dù thứ tự A,B,C,D trong file text hơi lộn xộn, mình đã mapping đúng nội dung)
            "Phân tích thành phần chính (PCA)."
        ],
        answer: "Hồi quy logistic." 
        // Lưu ý: Theo file gốc câu 1.5 đáp án là C[cite: 255]. Tại dòng [cite: 25] C là Hồi quy logistic.
    },
    {
        id: 6,
        chapter: 1,
        question: "1.6. Mô hình nào đã cách mạng hóa lĩnh vực nhận diện hình ảnh trong giai đoạn 2010 – hiện tại?",
        options: [
            "Mạng nơ-ron hồi tiếp (RNN).",
            "Mạng nơ-ron tích chập (CNN).",
            "Mô hình hồi quy logistic.",
            "Phương pháp k-nearest neighbors (KNN)."
        ],
        answer: "Mạng nơ-ron tích chập (CNN)."
    },
    {
        id: 7,
        chapter: 1,
        question: "1.7. Sự phát triển của các mô hình học máy lớn như GPT-3 và BERT chủ yếu thuộc về giai đoạn nào?",
        options: [
            "Giai đoạn Sơ khai (1950 – 1970).",
            "Giai đoạn Phát triển đầu tiên (1970 – 1990).",
            "Giai đoạn Bùng nổ (1990 – 2010).",
            "Giai đoạn Hiện đại (2010 – hiện tại)."
        ],
        answer: "Giai đoạn Hiện đại (2010 – hiện tại)."
    },
    {
        id: 8,
        chapter: 1,
        question: "1.8. Trong học có giám sát (Supervised Learning), mô hình nào sau đây thường được sử dụng để phân loại dữ liệu?",
        options: [
            "PCA (Principal Component Analysis).",
            "K-Means Clustering.",
            "Hồi quy Logistic.",
            "Tự mã hóa (Autoencoders)."
        ],
        answer: "Hồi quy Logistic."
    },
    {
        id: 9,
        chapter: 1,
        question: "1.9. Kỹ thuật nào sau đây là một phương pháp học không giám sát (Unsupervised Learning) dùng để giảm số lượng đặc trưng trong dữ liệu?",
        options: [
            "Phát hiện bất thường (Anomaly Detection).",
            "Giảm chiều dữ liệu (Dimensionality Reduction).",
            "Học dựa trên chính sách (Policy-Based Methods).",
            "Phân cụm (Clustering)."
        ],
        answer: "Giảm chiều dữ liệu (Dimensionality Reduction)."
    },
    {
        id: 10,
        chapter: 1,
        question: "1.10. Trong học tăng cường (Reinforcement Learning), thuật toán nào sử dụng một chính sách để chọn hành động nhằm tối ưu hóa tổng phần thưởng trong môi trường?",
        options: [
            "Q-Learning.",
            "Proximal Policy Optimization (PPO).",
            "PCA (Principal Component Analysis).",
            "K-Means Clustering."
        ],
        answer: "Proximal Policy Optimization (PPO)."
    },
    {
        id: 11,
        chapter: 1,
        question: "1.11. Trong học không giám sát, phương pháp nào được sử dụng để nhóm các đối tượng dữ liệu dựa trên sự tương đồng của chúng?",
        options: [
            "Phát hiện bất thường (Anomaly Detection).",
            "Phân lớp Naive Bayes.",
            "Phân cụm K-Means.",
            "Học dựa trên giá trị (Value-Based Methods)."
        ],
        answer: "Phân cụm K-Means."
    },
    {
        id: 12,
        chapter: 1,
        question: "1.12. Trong học tăng cường, thuật toán nào thuộc phương pháp học dựa trên giá trị (Value-Based Methods) và sử dụng hàm giá trị để điều chỉnh chính sách?",
        options: [
            "Deep Deterministic Policy Gradient (DDPG).",
            "Q-Learning.",
            "REINFORCE.",
            "Học dựa trên mô hình (Model-Based Methods)."
        ],
        answer: "Q-Learning."
    },
    {
        id: 13,
        chapter: 1,
        question: "1.13. Bước nào trong quy trình xây dựng ứng dụng học máy giúp xác định bài toán cần giải quyết và các tiêu chí đánh giá hiệu suất của mô hình?",
        options: [
            "Xác định vấn đề và mục tiêu.",
            "Thu thập dữ liệu.",
            "Trích chọn đặc trưng.",
            "Huấn luyện mô hình."
        ],
        answer: "Xác định vấn đề và mục tiêu."
    },
    {
        id: 14,
        chapter: 1,
        question: "1.14. Bước nào trong quy trình xây dựng ứng dụng học máy liên quan đến việc chuyển đổi dữ liệu thành dạng phù hợp cho các thuật toán học máy?",
        options: [
            "Huấn luyện mô hình.",
            "Tiền xử lý dữ liệu.",
            "Đánh giá mô hình.",
            "Trích chọn đặc trưng."
        ],
        answer: "Tiền xử lý dữ liệu."
    },
    {
        id: 15,
        chapter: 1,
        question: "1.15. Mục tiêu chính của bước trích chọn đặc trưng trong quy trình học máy là gì?",
        options: [
            "Thu thập dữ liệu từ nhiều nguồn khác nhau.",
            "Lựa chọn các đặc trưng quan trọng để cải thiện hiệu suất mô hình.",
            "Điều chỉnh siêu tham số của mô hình.",
            "Đánh giá mô hình bằng các chỉ số hiệu suất."
        ],
        answer: "Lựa chọn các đặc trưng quan trọng để cải thiện hiệu suất mô hình."
    },
    {
        id: 16,
        chapter: 1,
        question: "1.16. Bước nào trong quy trình xây dựng ứng dụng học máy đảm bảo rằng mô hình tiếp tục hoạt động tốt trong môi trường thực tế và được cập nhật khi cần thiết?",
        options: [
            "Triển khai mô hình.",
            "Theo dõi và bảo trì mô hình.",
            "Tiền xử lý dữ liệu.",
            "Trích chọn đặc trưng."
        ],
        answer: "Theo dõi và bảo trì mô hình."
    },
    {
        id: 17,
        chapter: 1,
        question: "1.17. Trong quy trình xây dựng ứng dụng học máy, bước nào giúp đánh giá hiệu suất của mô hình trên dữ liệu kiểm tra để xác định mô hình có thể hoạt động tốt trên dữ liệu mới hay không?",
        options: [
            "Trích chọn đặc trưng.",
            "Tiền xử lý dữ liệu.",
            "Huấn luyện mô hình.",
            "Đánh giá mô hình."
        ],
        answer: "Đánh giá mô hình."
    },
    {
        id: 18,
        chapter: 1,
        question: "1.18. Kỹ thuật nào sau đây thường được sử dụng để thu thập dữ liệu từ các trang web bằng cách phân tích mã HTML?",
        options: [
            "Logging.",
            "Scraping.",
            "Crawling.",
            "Sampling."
        ],
        answer: "Scraping."
    },
    {
        id: 19,
        chapter: 1,
        question: "1.19. Lấy mẫu phân tầng là phương pháp lấy mẫu nào?",
        options: [
            "Chọn ngẫu nhiên một mẫu từ toàn bộ dữ liệu.",
            "Chia dữ liệu thành các nhóm và chọn mẫu từ mỗi nhóm.",
            "Chọn mẫu theo một quy luật hoặc khoảng cách nhất định.",
            "Lấy mẫu từ các dữ liệu đã được ghi lại."
        ],
        answer: "Chia dữ liệu thành các nhóm và chọn mẫu từ mỗi nhóm."
    },
    {
        id: 20,
        chapter: 1,
        question: "1.20. Một trong những thách thức chính khi thu thập dữ liệu từ các trang web là:",
        options: [
            "Dữ liệu được lưu trữ trong các cơ sở dữ liệu.",
            "Khả năng truy cập dữ liệu từ các thiết bị cảm biến.",
            "Xử lý dữ liệu không đồng nhất hoặc yêu cầu quyền truy cập.",
            "Sự đa dạng của các nguồn dữ liệu công khai."
        ],
        answer: "Xử lý dữ liệu không đồng nhất hoặc yêu cầu quyền truy cập."
    },
    {
        id: 21,
        chapter: 1,
        question: "1.21. Phương pháp nào sau đây giúp xử lý dữ liệu bị thiếu bằng cách thay thế các giá trị thiếu bằng các giá trị gần nhất từ các điểm dữ liệu xung quanh?",
        options: [
            "Loại bỏ hàng chứa giá trị thiếu.",
            "Dự đoán bằng thuật toán học máy.",
            "Nội suy (Interpolation).",
            "Sử dụng giá trị trung bình của cột."
        ],
        answer: "Nội suy (Interpolation)."
    },
    {
        id: 22,
        chapter: 1,
        question: "1.22. Kỹ thuật nào sau đây được sử dụng để phát hiện và loại bỏ các điểm dữ liệu không bình thường, mà có thể gây ảnh hưởng xấu đến chất lượng mô hình học máy?",
        options: [
            "Chuẩn hóa dữ liệu.",
            "Loại bỏ giá trị ngoại lai (Outliers).",
            "Sử dụng trung bình di động.",
            "Thay thế dữ liệu bị thiếu bằng trung bình."
        ],
        answer: "Loại bỏ giá trị ngoại lai (Outliers)."
    },
    {
        id: 23,
        chapter: 1,
        question: "1.23. Khi áp dụng phương pháp làm mịn để xử lý dữ liệu nhiễu, phương pháp nào sau đây giúp tính toán giá trị trung bình của một số điểm dữ liệu liên tiếp?",
        options: [
            "Lọc Kalman.",
            "Trung bình di động (Moving Average).",
            "Nội suy tuyến tính.",
            "Chuẩn hóa dữ liệu."
        ],
        answer: "Trung bình di động (Moving Average)."
    },
    {
        id: 24,
        chapter: 1,
        question: "1.24. Quá trình tích hợp dữ liệu trong học máy yêu cầu điều gì để đảm bảo mô hình hoạt động hiệu quả?",
        options: [
            "Chỉ cần kết hợp dữ liệu từ nhiều nguồn mà không cần chuẩn hóa.",
            "Cần chuẩn hóa và đồng bộ hóa dữ liệu từ nhiều nguồn khác nhau.",
            "Loại bỏ các dữ liệu không liên quan mà không cần xử lý thêm.",
            "Kết hợp dữ liệu từ nhiều nguồn nhất để giảm độ phức tạp."
        ],
        answer: "Cần chuẩn hóa và đồng bộ hóa dữ liệu từ nhiều nguồn khác nhau."
    },
    {
        id: 25,
        chapter: 1,
        question: "1.25. Một trong những lợi ích chính của việc tích hợp dữ liệu từ nhiều nguồn khác nhau trong học máy là gì?",
        options: [
            "Tăng cường số lượng dữ liệu nhưng giảm độ chính xác của mô hình.",
            "Giảm khả năng mô hình gặp phải hiện tượng overfitting và tăng khả năng tổng quát hóa.",
            "Loại bỏ nhu cầu xử lý trước dữ liệu.",
            "Giảm sự đa dạng của dữ liệu, giúp mô hình tập trung vào một số đặc trưng chính."
        ],
        answer: "Giảm khả năng mô hình gặp phải hiện tượng overfitting và tăng khả năng tổng quát hóa."
    },
    {
        id: 26,
        chapter: 1,
        question: "1.26. Biến đổi wavelet rời rạc (DWT) giúp ích cho việc gì trong học máy?",
        options: [
            "Giảm nhiễu trong dữ liệu bằng cách tăng số chiều dữ liệu.",
            "Giảm số chiều dữ liệu bằng cách nén thông tin.",
            "Tăng kích thước của dữ liệu để phân tích dễ hơn.",
            "Loại bỏ tất cả các hệ số wavelet để tạo ra dữ liệu mới."
        ],
        answer: "Giảm số chiều dữ liệu bằng cách nén thông tin."
    },
    {
        id: 27,
        chapter: 1,
        question: "1.27. Khi áp dụng DWT, điều gì xảy ra với các hệ số wavelet không vượt qua ngưỡng nhất định?",
        options: [
            "Các hệ số nhỏ hơn ngưỡng sẽ được giữ lại.",
            "Các hệ số nhỏ hơn ngưỡng sẽ được làm tròn lên một giá trị cao hơn.",
            "Các hệ số nhỏ hơn ngưỡng sẽ được đặt thành 0.",
            "Tất cả các hệ số sẽ được giữ nguyên, không thay đổi."
        ],
        answer: "Các hệ số nhỏ hơn ngưỡng sẽ được đặt thành 0."
    },
    {
        id: 28,
        chapter: 1,
        question: "1.28. Điều kiện nào cần được thỏa mãn trước khi áp dụng biến đổi wavelet rời rạc (DWT)?",
        options: [
            "Vector dữ liệu phải có chiều dài là một số nguyên lẻ.",
            "Vector dữ liệu phải có chiều dài là một số nguyên bậc hai.",
            "Vector dữ liệu phải có độ dài lớn hơn 1024.",
            "Không cần điều kiện nào đặc biệt về độ dài của vector dữ liệu."
        ],
        answer: "Không cần điều kiện nào đặc biệt về độ dài của vector dữ liệu."
    },
    {
        id: 29,
        chapter: 1,
        question: "1.29. Mục tiêu chính của phép phân tích thành phần chính (PCA) là gì?",
        options: [
            "Tăng số chiều dữ liệu để phân tích chi tiết hơn.",
            "Tối ưu hóa việc thể hiện sự biến thiên của dữ liệu trong không gian ít chiều hơn.",
            "Tìm kiếm các mẫu ngẫu nhiên trong dữ liệu.",
            "Tính toán độ tương quan giữa các thuộc tính dữ liệu."
        ],
        answer: "Tối ưu hóa việc thể hiện sự biến thiên của dữ liệu trong không gian ít chiều hơn."
    },
    {
        id: 30,
        chapter: 1,
        question: "1.30. Trong PCA, các vector trực giao được gọi là gì?",
        options: [
            "Các trục dữ liệu.",
            "Các hệ số chuẩn hóa.",
            "Các thành phần chính.",
            "Các thuộc tính dữ liệu."
        ],
        answer: "Các thành phần chính."
    },
    {
        id: 31,
        chapter: 1,
        question: "1.31. Vì sao cần chuẩn hóa dữ liệu trước khi áp dụng PCA?",
        options: [
            "Để tăng kích thước của dữ liệu.",
            "Để đảm bảo rằng các thuộc tính với phạm vi giá trị lớn không chi phối quá mức các thuộc tính khác.",
            "Để tạo ra các thuộc tính mới từ dữ liệu gốc.",
            "Để loại bỏ các thuộc tính có giá trị nhỏ."
        ],
        answer: "Để đảm bảo rằng các thuộc tính với phạm vi giá trị lớn không chi phối quá mức các thuộc tính khác."
    },
    {
        id: 32,
        chapter: 1,
        question: "1.32. Các thành phần chính trong PCA được sắp xếp theo thứ tự nào?",
        options: [
            "Theo thứ tự độ tương quan giữa các thuộc tính.",
            "Theo thứ tự tăng dần về phương sai.",
            "Theo thứ tự giảm dần về phương sai.",
            "Theo thứ tự thời gian thu thập dữ liệu."
        ],
        answer: "Theo thứ tự giảm dần về phương sai."
    },
    {
        id: 33,
        chapter: 1,
        question: "1.33. Lợi ích chính của việc sử dụng PCA trong học máy là gì?",
        options: [
            "Giảm số chiều dữ liệu nhưng vẫn giữ lại các thông tin quan trọng.",
            "Tăng khả năng chi tiết hóa dữ liệu ban đầu.",
            "Tạo ra các thuộc tính mới không liên quan đến dữ liệu gốc.",
            "Loại bỏ hoàn toàn các thuộc tính dư thừa trong dữ liệu."
        ],
        answer: "Giảm số chiều dữ liệu nhưng vẫn giữ lại các thông tin quan trọng."
    },
    {
        id: 34,
        chapter: 1,
        question: "1.34. Trong quá trình lựa chọn tập hợp con thuộc tính, điều kiện nào cần được đảm bảo để mô hình học máy không bị suy giảm đáng kể về hiệu suất dự đoán?",
        options: [
            "Phân phối xác suất của kết quả sau khi giảm số lượng thuộc tính phải gần giống với phân phối gốc.",
            "Các thuộc tính còn lại phải có giá trị trung bình giống nhau.",
            "Tất cả các thuộc tính phải được chuẩn hóa về cùng một đơn vị đo lường.",
            "Thuộc tính nào có mối tương quan thấp với đầu ra cần phải bị loại bỏ."
        ],
        answer: "Phân phối xác suất của kết quả sau khi giảm số lượng thuộc tính phải gần giống với phân phối gốc."
    },
    {
        id: 35,
        chapter: 1,
        question: "1.35. Khi lựa chọn tập hợp con thuộc tính, vì sao việc giữ lại các thuộc tính có liên quan nhất nhưng loại bỏ những thuộc tính trùng lặp hoặc không quan trọng lại giúp tăng độ chính xác của mô hình?",
        options: [
            "Vì nó giảm nhiễu và giúp mô hình tập trung vào các thông tin quan trọng nhất, từ đó cải thiện khả năng dự đoán.",
            "Vì nó tăng độ phức tạp của mô hình, giúp mô hình học được các đặc trưng chi tiết hơn.",
            "Vì nó làm giảm số lượng phép tính mà mô hình cần thực hiện, do đó tăng cường tốc độ và độ chính xác.",
            "Vì nó tối ưu hóa việc học tập của mô hình bằng cách tập trung vào tất cả các thuộc tính."
        ],
        answer: "Vì nó giảm nhiễu và giúp mô hình tập trung vào các thông tin quan trọng nhất, từ đó cải thiện khả năng dự đoán."
    },
    {
        id: 36,
        chapter: 1,
        question: "1.36. Giả sử có một tập dữ liệu gồm 15,000 điểm dữ liệu. Nếu áp dụng phương pháp mẫu ngẫu nhiên đơn giản có thay thế (SRSWR) để lấy mẫu 1,500 điểm, xác suất để một điểm dữ liệu cụ thể được chọn đúng 3 lần trong mẫu là bao nhiêu?",
        options: [
            "0.185",
            "0.231",
            "0.298",
            "0.342"
        ],
        answer: "0.231"
    },
    {
        id: 37,
        chapter: 1,
        question: "1.37. Từ một tập dữ liệu lớn có 100,000 điểm dữ liệu được chia thành 500 cụm, nếu muốn lấy mẫu từ 20 cụm và mỗi cụm có 200 điểm dữ liệu, tổng số điểm dữ liệu thu thập được trong mẫu là bao nhiêu?",
        options: [
            "2,000",
            "3,000",
            "4,000",
            "5,000"
        ],
        answer: "4,000"
    },
    {
        id: 38,
        chapter: 1,
        question: "1.38. Khi thực hiện mẫu ngẫu nhiên đơn giản không thay thế (SRSWOR) từ tập dữ liệu gồm 8,000 điểm dữ liệu và lấy mẫu 400 điểm, xác suất để một điểm dữ liệu cụ thể KHÔNG ĐƯỢC CHỌN trong mẫu là bao nhiêu?",
        options: [
            "0.05",
            "0.95",
            "0.90",
            "0.92"
        ],
        answer: "0.95"
    },
    {
        id: 39,
        chapter: 1,
        question: "1.39. Nếu một tập dữ liệu lớn gồm 50,000 điểm dữ liệu và bạn quyết định lấy mẫu bằng phương pháp mẫu ngẫu nhiên đơn giản có thay thế (SRSWR) với 2,000 mẫu, xác suất để ít nhất một mẫu trong số đó bị trùng lặp là bao nhiêu?",
        options: [
            "0.697",
            "0.789",
            "0.832",
            "0.845"
        ],
        answer: "0.697"
    },
    {
        id: 40,
        chapter: 1,
        question: "1.40. Trong một nghiên cứu, bạn muốn lấy mẫu từ một tập dữ liệu có 25,000 điểm dữ liệu bằng phương pháp lấy mẫu cụm. Nếu tập dữ liệu được chia thành 100 cụm và bạn lấy 15 cụm, với mỗi cụm có 250 điểm dữ liệu, tỷ lệ phần trăm mẫu thu thập được so với tổng số mẫu trong tập dữ liệu là bao nhiêu?",
        options: [
            "1%",
            "3%",
            "6%",
            "12%"
        ],
        answer: "12%"
    },
    {
        id: 41,
        chapter: 1,
        question: "1.41. Khi chuẩn hóa giá trị thu nhập $73,600 với giá trị tối thiểu và tối đa lần lượt là $12,000 và $98,000, giá trị chuẩn hóa sẽ là:",
        options: [
            "0.716",
            "0.832",
            "0.902",
            "0.456"
        ],
        answer: "0.716"
    },
    {
        id: 42,
        chapter: 1,
        question: "1.42. Nếu giá trị trung bình và độ lệch chuẩn của thu nhập lần lượt là $54,000 và $16,000, giá trị thu nhập $73,600 sau khi chuẩn hóa Z-Score sẽ là:",
        options: [
            "1.225",
            "1.500",
            "0.800",
            "2.000"
        ],
        answer: "1.225"
    },
    {
        id: 43,
        chapter: 1,
        question: "1.43. Tính độ lệch tuyệt đối trung bình của các giá trị thu nhập: [52,000; 58,000; 54,000; 56,000; 73,600].",
        options: [
            "5,000",
            "7,120",
            "6,400",
            "8,300"
        ],
        answer: "7,120"
    },
    {
        id: 44,
        chapter: 1,
        question: "1.44. Với giá trị trung bình thu nhập $54,000 và độ lệch tuyệt đối trung bình là 7,120, giá trị chuẩn hóa cho thu nhập $73,600 sẽ là:",
        options: [
            "2.748",
            "1.225",
            "1.800",
            "1.000"
        ],
        answer: "2.748"
    },
    {
        id: 45,
        chapter: 1,
        question: "1.45. Để chuẩn hóa các giá trị thu nhập từ -986 đến 917 sao cho nằm trong khoảng [-1, 1], số nguyên j cần di chuyển là:",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: "3"
    },
    {
        id: 46,
        chapter: 1,
        question: "1.46. Trong trường hợp không thực hiện chuẩn hóa, thuộc tính nào có thể chiếm ưu thế trong mô hình học máy:",
        options: [
            "Thuộc tính không có trọng số.",
            "Thuộc tính có giá trị nhỏ.",
            "Thuộc tính có phạm vi lớn.",
            "Thuộc tính không liên quan."
        ],
        answer: "Thuộc tính có phạm vi lớn."
    },
    {
        id: 47,
        chapter: 1,
        question: "1.47. Chuẩn hóa Z-Score có đặc điểm gì nổi bật:",
        options: [
            "Dựa vào giá trị tối đa.",
            "Không sử dụng độ lệch chuẩn.",
            "Sử dụng độ lệch chuẩn để tính toán.",
            "Chỉ áp dụng cho giá trị dương."
        ],
        answer: "Sử dụng độ lệch chuẩn để tính toán."
    },
    {
        id: 48,
        chapter: 1,
        question: "1.48. Nếu giá trị gốc của thuộc tính A là [100, 200, 300], sau khi chuẩn hóa Min-Max vào phạm vi [0, 1], giá trị 200 sẽ trở thành:",
        options: [
            "0.25",
            "0.50",
            "0.75",
            "1.00"
        ],
        answer: "0.50"
    },
    {
        id: 49,
        chapter: 1,
        question: "1.49. Trong một bộ dữ liệu có 100 mẫu và độ lệch chuẩn là 15, giá trị Z-Score cho mẫu có giá trị 90 sẽ là:",
        options: [
            "2.00",
            "1.50",
            "1.00",
            "0.50"
        ],
        answer: "2.00" 
        // Lưu ý: Đề bài câu 49 thiếu giá trị trung bình để tính Z-Score, nhưng dựa vào đáp án và logic đề bài thường gặp (nếu mean=60 thì (90-60)/15 = 2.0).
        // Căn cứ đáp án gốc là A [cite: 255] -> Chọn 2.00.
    },
    {
        id: 50,
        chapter: 1,
        question: "1.50. Nếu độ lệch chuẩn của thu nhập là $16,000 và giá trị chuẩn hóa Z-Score của một thu nhập là $73,600 là 1.225, thì giá trị trung bình thu nhập là:",
        options: [
            "$54,000",
            "$58,000",
            "$60,000",
            "$62,000"
        ],
        answer: "$54,000"
    },
	// --- BẮT ĐẦU CHƯƠNG 2 ---
    {
        id: 51,
        chapter: 2,
        question: "2.1. Hệ số tương quan được sử dụng để xác định",
        options: [
            "Một giá trị cụ thể của biến y khi biết một giá trị cụ thể của biến x.",
            "Một giá trị cụ thể của biến x khi biết một giá trị cụ thể của biến y.",
            "Độ mạnh của mối quan hệ giữa các biến x và y.",
            "Không có câu nào trong số này."
        ],
        answer: "Độ mạnh của mối quan hệ giữa các biến x và y."
    },
    {
        id: 52,
        chapter: 2,
        question: "2.2. Nếu có mối tương quan rất mạnh giữa hai biến thì hệ số tương quan phải là",
        options: [
            "bất kỳ giá trị nào lớn hơn 1",
            "nhỏ hơn nhiều so với 0, nếu mối tương quan là âm",
            "lớn hơn nhiều so với 0, bất kể mối tương quan là âm hay dương",
            "Không có phương án nào trong số này là đúng."
        ],
        answer: "nhỏ hơn nhiều so với 0, nếu mối tương quan là âm"
    },
    {
        id: 53,
        chapter: 2,
        question: "2.3. Trong hồi quy, phương trình mô tả cách biến phản hồi (y) liên quan đến biến giải thích (x) là",
        options: [
            "mô hình tương quan",
            "mô hình hồi quy",
            "được sử dụng để tính hệ số tương quan",
            "Không có phương án nào trong số này là đúng"
        ],
        answer: "mô hình hồi quy"
    },
    {
        id: 54,
        chapter: 2,
        question: "2.4. Mối quan hệ giữa số lượng bia tiêu thụ (x) và nồng độ cồn trong máu (y) đã được nghiên cứu ở 16 sinh viên nam đại học bằng cách sử dụng hồi quy bình phương nhỏ nhất. Phương trình hồi quy sau đây thu được từ nghiên cứu này y = -0,0127 + 0,0180x. Phương trình trên ngụ ý rằng:",
        options: [
            "mỗi cốc bia tiêu thụ làm tăng nồng độ cồn trong máu lên 1,27%",
            "trung bình phải uống 1,8 cốc bia để làm tăng nồng độ cồn trong máu lên 1%",
            "mỗi cốc bia tiêu thụ làm tăng nồng độ cồn trong máu lên trung bình 1,8%",
            "mỗi cốc bia tiêu thụ làm tăng nồng độ cồn trong máu lên đúng 0,018"
        ],
        answer: "mỗi cốc bia tiêu thụ làm tăng nồng độ cồn trong máu lên trung bình 1,8%"
    },
    {
        id: 55,
        chapter: 2,
        question: "2.5. Mô hình hồi quy là một khuôn khổ thống kê để phát triển một phương trình toán học mô tả cách",
        options: [
            "một biến giải thích và một hoặc nhiều biến phản hồi có liên quan",
            "một số biến giải thích và một số biến phản hồi có liên quan",
            "một biến phản hồi và một hoặc nhiều biến giải thích có liên quan",
            "Tất cả các điều này đều đúng."
        ],
        answer: "một biến phản hồi và một hoặc nhiều biến giải thích có liên quan"
    },
    {
        id: 56,
        chapter: 2,
        question: "2.6. Trong phân tích hồi quy, biến đang được dự đoán là",
        options: [
            "biến phản hồi hoặc biến phụ thuộc",
            "biến độc lập",
            "biến can thiệp",
            "thường là x"
        ],
        answer: "biến phản hồi hoặc biến phụ thuộc"
    },
    {
        id: 57,
        chapter: 2,
        question: "2.7. Phân tích hồi quy giữa doanh số (tính bằng 1000 đô la) và giá (tính bằng đô la) dẫn đến phương trình sau Y = 50.000 - 8X. Phương trình trên ngụ ý rằng",
        options: [
            "giá tăng 1 đô la có liên quan đến doanh số giảm 8 đô la",
            "giá tăng 8 đô la có liên quan đến doanh số tăng 8.000 đô la",
            "giá tăng 1 đô la có liên quan đến doanh số giảm 42.000 đô la",
            "giá tăng 1 đô la có liên quan đến doanh số giảm 8000 đô la"
        ],
        answer: "giá tăng 1 đô la có liên quan đến doanh số giảm 8000 đô la"
    },
    {
        id: 58,
        chapter: 2,
        question: "2.8. Nếu hai biến x và y có mối quan hệ tuyến tính rất mạnh, thì",
        options: [
            "có bằng chứng cho thấy x gây ra sự thay đổi trong y",
            "có bằng chứng cho thấy y gây ra sự thay đổi trong x",
            "có thể không có bất kỳ mối quan hệ nhân quả nào giữa x và y",
            "Không có phương án nào trong số này là đúng."
        ],
        answer: "có thể không có bất kỳ mối quan hệ nhân quả nào giữa x và y"
    },
    {
        id: 59,
        chapter: 2,
        question: "2.9. Nếu hệ số xác định bằng 1, thì hệ số tương quan",
        options: [
            "cũng phải bằng 1",
            "có thể là -1 hoặc +1",
            "có thể là bất kỳ giá trị nào giữa -1 đến +1",
            "phải là -1"
        ],
        answer: "có thể là -1 hoặc +1"
    },
    {
        id: 60,
        chapter: 2,
        question: "2.10. Trong phân tích hồi quy, nếu biến độc lập được đo bằng kilôgam, thì biến phụ thuộc",
        options: [
            "cũng phải được đo bằng kilôgam",
            "phải được đo bằng một đơn vị trọng lượng nào đó",
            "không thể được đo bằng kilôgam",
            "có thể là bất kỳ đơn vị nào"
        ],
        answer: "có thể là bất kỳ đơn vị nào"
    },
    {
        id: 61,
        chapter: 2,
        question: "2.11. Phương trình hồi quy sau đây thu được từ nghiên cứu này y = -0,0127 + 0,0180x. Giả sử rằng giới hạn hợp pháp để lái xe là nồng độ cồn trong máu là 0,08. Nếu Ricky tiêu thụ 5 cốc bia, mô hình sẽ dự đoán rằng anh ta sẽ:",
        options: [
            "Cao hơn giới hạn hợp pháp 0,09",
            "Thấp hơn giới hạn hợp pháp 0,0027",
            "Cao hơn giới hạn hợp pháp 0,0027",
            "Cao hơn giới hạn hợp pháp 0,0733"
        ],
        answer: "Thấp hơn giới hạn hợp pháp 0,0027"
    },
    {
        id: 62,
        chapter: 2,
        question: "2.12. Nếu hệ số xác định là 0,81, hệ số tương quan",
        options: [
            "là 0,6561",
            "có thể là + 0,9 hoặc - 0,9",
            "phải dương",
            "phải âm"
        ],
        answer: "có thể là + 0,9 hoặc - 0,9"
    },
    {
        id: 63,
        chapter: 2,
        question: "2.13. Bạn đã thực hiện phân tích hồi quy; nhưng sau khi suy nghĩ về mối quan hệ giữa các biến, bạn quyết định phải hoán đổi biến giải thích và biến phản hồi. Sau khi điều chỉnh lại mô hình hồi quy cho dữ liệu, bạn mong đợi rằng",
        options: [
            "giá trị của hệ số tương quan sẽ thay đổi",
            "giá trị của SSE sẽ thay đổi",
            "giá trị của hệ số xác định sẽ thay đổi",
            "dấu của độ dốc sẽ thay đổi",
            "không có gì thay đổi"
        ],
        answer: "giá trị của SSE sẽ thay đổi" 
        // Lưu ý: Key là B. Trong hồi quy đơn biến, SSE thay đổi khi đảo vai trò x và y, nhưng R^2 và hệ số tương quan r giữ nguyên.
    },
    {
        id: 64,
        chapter: 2,
        question: "2.14. Giả sử sử dụng hồi quy để dự đoán chiều cao của bạn trai hiện tại (nam) bằng cách sử dụng chiều cao của chính cô ấy (nữ). Giả sử rằng chiều cao của cả phụ nữ và nam giới đều được chuyển đổi từ feet thành cm. Tác động của phép chuyển đổi này lên độ dốc là",
        options: [
            "dấu của độ dốc sẽ thay đổi",
            "độ lớn của độ dốc sẽ thay đổi",
            "cả a và b đều đúng",
            "cả a và b đều không đúng"
        ],
        answer: "cả a và b đều không đúng"
        // Key là D. Khi đổi đơn vị cả x và y cùng tỷ lệ (feet->cm), độ dốc (slope) b1 = r * (Sy/Sx) sẽ không đổi vì tỷ lệ triệt tiêu nhau.
    },
    {
        id: 65,
        chapter: 2,
        question: "2.15. Trong các câu sau đây, câu nào là nhược điểm của thuật toán học máy không tham số?",
        options: [
            "Có khả năng phù hợp với một số lượng lớn các dạng hàm (flexibility)",
            "Học rất nhanh (speed)",
            "Rủi ro cao hơn khi quá khớp dữ liệu đào tạo (overfitting)",
            "Chúng không yêu cầu nhiều dữ liệu đào tạo"
        ],
        answer: "Rủi ro cao hơn khi quá khớp dữ liệu đào tạo (overfitting)"
    },
    {
        id: 66,
        chapter: 2,
        question: "2.16. Câu nào sau đây là đúng đối với các phương pháp hồi quy trong trường hợp lựa chọn tính năng?",
        options: [
            "Hồi quy Ridge sử dụng lựa chọn tập hợp con các tính năng",
            "Hồi quy Lasso sử dụng lựa chọn tập hợp con các tính năng",
            "Cả hai đều sử dụng lựa chọn tập hợp con các tính năng",
            "Không có câu nào trong số trên"
        ],
        answer: "Hồi quy Lasso sử dụng lựa chọn tập hợp con các tính năng"
    },
    {
        id: 67,
        chapter: 2,
        question: "2.17. Trong hồi quy Ridge, khi tham số chính quy tăng, hệ số hồi quy giảm?",
        options: [
            "Đúng",
            "Sai"
        ],
        answer: "Đúng"
    },
    {
        id: 68,
        chapter: 2,
        question: "2.18. Đầu ra của lệnh sau là gì? Print(foo(1,2)) def foo(a,b): Return a+b+1",
        options: [
            "2",
            "3",
            "6",
            "Lỗi"
        ],
        answer: "Lỗi"
    },
    {
        id: 69,
        chapter: 2,
        question: "2.19. Có đúng là thuật ngữ L1 trong Lasso có các mục đích sau: thực hiện lựa chọn tính năng, bù cho quá trình khớp quá mức và làm mịn không?",
        options: [
            "Đúng",
            "Sai"
        ],
        answer: "Sai"
    },
    {
        id: 70,
        chapter: 2,
        question: "2.20. Quá trình chính quy nào được sử dụng để giảm vấn đề khớp quá mức?",
        options: [
            "L1",
            "L2",
            "Cả hai",
            "Không có đáp án nào trên đây"
        ],
        answer: "Cả hai"
    },
    {
        id: 71,
        chapter: 2,
        question: "2.21. Để kiểm tra mối quan hệ tuyến tính giữa các biến liên tục phụ thuộc và độc lập, biểu đồ nào sau đây là phù hợp nhất?",
        options: [
            "Biểu đồ phân tán",
            "Biểu đồ thanh",
            "Biểu đồ histogram",
            "Tất cả các biểu đồ trên"
        ],
        answer: "Biểu đồ phân tán"
    },
    {
        id: 72,
        chapter: 2,
        question: "2.22. Phát biểu 1: Hàm chi phí được thay đổi bằng cách thêm một hình phạt tương đương với bình phương độ lớn của các hệ số. Phát biểu 2: Hồi quy Ridge và Lasso là một số kỹ thuật đơn giản để giảm độ phức tạp của mô hình và ngăn ngừa tình trạng quá khớp có thể xảy ra do hồi quy tuyến tính đơn giản.",
        options: [
            "Phát biểu 1 đúng và phát biểu 2 sai",
            "Phát biểu 1 sai và phát biểu 2 đúng",
            "Cả hai phát biểu (1 & 2) đều đúng",
            "Cả hai phát biểu (1 & 2) đều sai"
        ],
        answer: "Cả hai phát biểu (1 & 2) đều đúng"
    },
    {
        id: 73,
        chapter: 2,
        question: "2.23. Giả định của hồi quy tuyến tính là gì?",
        options: [
            "Đầu ra và đầu vào phải tuyến tính, phụ thuộc và các tham số phải tuyến tính",
            "Nhiều biến đầu vào phải phi tuyến tính, nếu nhiều biến i/p tuyến tính thì được gọi là đồng tuyến tính",
            "Sai số phải không có quan hệ (hoặc) sai số phải độc lập, nếu bất kỳ quan hệ nào giữa các lỗi thì được gọi là Tự tương quan",
            "Tất cả các đáp án trên"
        ],
        answer: "Tất cả các đáp án trên"
    },
    {
        id: 74,
        chapter: 2,
        question: "2.24. Trong các hệ số sau, hệ số nào được thêm vào làm hạng tử phạt cho hàm mất mát trong hồi quy Lasso?",
        options: [
            "Độ lớn bình phương",
            "Giá trị tuyệt đối của độ lớn",
            "Số mục nhập khác không",
            "Không có đáp án nào trên đây"
        ],
        answer: "Giá trị tuyệt đối của độ lớn"
    },
    {
        id: 75,
        chapter: 2,
        question: "2.25. Loại hình phạt nào được sử dụng cho trọng số hồi quy trong hồi quy Ridge?",
        options: [
            "L0",
            "L1",
            "L2",
            "Không có đáp án nào trên đây"
        ],
        answer: "L2"
    },
    {
        id: 76,
        chapter: 2,
        question: "2.26. Nếu hai biến x và y có mối quan hệ tuyến tính rất mạnh, thì",
        options: [
            "Có bằng chứng cho thấy x gây ra sự thay đổi trong y",
            "Có bằng chứng cho thấy y gây ra sự thay đổi trong x",
            "Có thể không có bất kỳ mối quan hệ nhân quả nào giữa x và y",
            "Không có phương án nào trong số các phương án này là đúng"
        ],
        answer: "Có thể không có bất kỳ mối quan hệ nhân quả nào giữa x và y"
    },
    {
        id: 77,
        chapter: 2,
        question: "2.27. Phương án nào sau đây được sử dụng để đánh giá các mô hình hồi quy?",
        options: [
            "R bình phương điều chỉnh, R bình phương",
            "RMSE / MSE / MAE",
            "1 đúng và 2 sai",
            "Cả 1 và 2 đều đúng"
        ],
        answer: "Cả 1 và 2 đều đúng"
    },
    {
        id: 78,
        chapter: 2,
        question: "2.28. Hồi quy Lasso sử dụng chuẩn nào?",
        options: [
            "L1.",
            "L2.",
            "L1 & L2 đều đúng.",
            "Không có phương án nào trong số các phương án trên."
        ],
        answer: "L1."
    },
    {
        id: 79,
        chapter: 2,
        question: "2.29. Hồi quy Ridge sử dụng chuẩn nào?",
        options: [
            "L1.",
            "L2.",
            "Cả L1 và L2.",
            "Không có đáp án nào trên đây."
        ],
        answer: "L2."
    },
    {
        id: 80,
        chapter: 2,
        question: "2.30. Trong hồi quy Ridge, một siêu tham số được sử dụng có tên là ____ để điều khiển trọng số của hình phạt đối với hàm mất mát.",
        options: [
            "Alpha.",
            "Gamma.",
            "Lambda.",
            "Không có đáp án nào ở trên."
        ],
        answer: "Alpha."
    },
    {
        id: 81,
        chapter: 2,
        question: "2.31. Thư viện máy học Python scikit-learn cung cấp một triển khai của thuật toán hồi quy Ridge thông qua lớp Ridge. Thật khó hiểu, thuật ngữ lambda có thể được định nghĩa thông qua đối số ____ khi định nghĩa lớp.",
        options: [
            "Lambda.",
            "Gamma.",
            "Beta.",
            "Alpha."
        ],
        answer: "Alpha."
    },
    {
        id: 82,
        chapter: 2,
        question: "2.32. Hồi quy Ridge có thể giảm độ dốc xuống gần bằng không (nhưng không chính xác bằng không) nhưng hồi quy Lasso có thể giảm độ dốc xuống chính xác bằng không.",
        options: [
            "Cả hai câu lệnh đều Đúng về Ridge và Lasso.",
            "Cả hai câu lệnh đều Sai về Ridge và Lasso.",
            "Câu lệnh Đúng về Ridge nhưng không đúng về Lasso.",
            "Câu lệnh Đúng về Lasso nhưng không đúng về Ridge."
        ],
        answer: "Cả hai câu lệnh đều Đúng về Ridge và Lasso."
    },
    {
        id: 83,
        chapter: 2,
        question: "2.33. Hồi quy Ridge lấy giá trị ____ của các biến.",
        options: [
            "Giá trị bình phương của các biến.",
            "Giá trị tuyệt đối của các biến.",
            "Giá trị lập phương của các biến.",
            "Giá trị căn của các biến."
        ],
        answer: "Giá trị bình phương của các biến."
    },
    {
        id: 84,
        chapter: 2,
        question: "2.34. Hồi quy Ridge lấy giá trị ____ của các biến.",
        options: [
            "Giá trị bình phương của các biến.",
            "Giá trị tuyệt đối của các biến.",
            "Giá trị lập phương của các biến.",
            "Giá trị căn bậc hai của các biến."
        ],
        answer: "Giá trị tuyệt đối của các biến."
    },
    {
        id: 85,
        chapter: 2,
        question: "2.35. Hiệu ứng của giá trị alpha đối với cả hồi quy ridge và hồi quy lasso là như nhau về mặt tăng và giảm giá trị.",
        options: [
            "Đúng.",
            "Sai.",
            "Giá trị alpha là giá trị cố định cho hồi quy ridge.",
            "Không có đáp án nào ở trên."
        ],
        answer: "Đúng."
    },
    {
        id: 86,
        chapter: 2,
        question: "2.36. Trong hồi quy Lasso và Ridge này khi giá trị alpha tăng, độ dốc của đường hồi quy giảm và trở thành đường nằm ngang.",
        options: [
            "Độ dốc được cố định cho bất kỳ giá trị nào.",
            "Sai.",
            "Đúng.",
            "Không có đáp án nào ở trên."
        ],
        answer: "Đúng."
    },
    {
        id: 87,
        chapter: 2,
        question: "2.37. Cho các phát biểu sau: I. Hồi quy Lasso giúp giảm tình trạng quá khớp và đặc biệt hữu ích cho việc lựa chọn tính năng. II. Hồi quy Lasso có thể hữu ích nếu có một số biến độc lập vô dụng.",
        options: [
            "Phát biểu (I) đúng và phát biểu (II) sai.",
            "Phát biểu (I) sai và phát biểu (II) đúng.",
            "Cả hai phát biểu (I) và (II) đều sai.",
            "Cả hai phát biểu (I) và (II) đều đúng."
        ],
        answer: "Cả hai phát biểu (I) và (II) đều đúng."
    },
    {
        id: 88,
        chapter: 2,
        question: "2.38. Với hồi quy Lasso, ảnh hưởng của siêu tham số lambda, vì lambda có xu hướng bằng 0 nên nghiệm tiến tới ____",
        options: [
            "Bằng 0.",
            "Một.",
            "Hồi quy tuyến tính.",
            "Vô cực."
        ],
        answer: "Hồi quy tuyến tính."
    },
    {
        id: 89,
        chapter: 2,
        question: "2.39. Với hồi quy Lasso, ảnh hưởng của siêu tham số lambda, vì lambda có xu hướng bằng 0 nên nghiệm tiến tới ____",
        options: [
            "Bằng 0.",
            "Một.",
            "Trung bình toàn cục.",
            "Vô cực."
        ],
        answer: "Trung bình toàn cục." 
    },
    {
        id: 90,
        chapter: 2,
        question: "2.40. Hồi quy Ridge và Lasso là những kỹ thuật đơn giản để ____ độ phức tạp của mô hình và ngăn ngừa tình trạng quá khớp có thể xảy ra do hồi quy tuyến tính đơn giản.",
        options: [
            "Tăng",
            "Giảm",
            "Loại bỏ",
            "Không có đáp án nào ở trên"
        ],
        answer: "Giảm"
    },
    {
        id: 91,
        chapter: 2,
        question: "2.41. Phân tích độ lệch-phương sai của ước lượng hồi quy ridge so với hồi quy bình phương tối thiểu thông thường như thế nào?",
        options: [
            "Ridge có độ lệch lớn hơn, phương sai lớn hơn",
            "Ridge có độ lệch lớn hơn, phương sai nhỏ hơn",
            "Ridge có độ lệch nhỏ hơn, phương sai lớn hơn",
            "Ridge có độ lệch nhỏ hơn, phương sai nhỏ hơn"
        ],
        answer: "Ridge có độ lệch lớn hơn, phương sai nhỏ hơn"
    },
    {
        id: 92,
        chapter: 2,
        question: "2.42. Thuật toán hồi quy logistic là loại thuật toán nào?",
        options: [
            "Giảm thiểu hàm chi phí",
            "Xếp hạng",
            "Hồi quy",
            "Phân loại"
        ],
        answer: "Phân loại"
    },
    {
        id: 93,
        chapter: 2,
        question: "2.43. Một vấn đề phát hiện ung thư có thể được giải quyết bằng hồi quy logistic không?",
        options: [
            "Đôi khi",
            "Không",
            "Có",
            "Phụ thuộc vào tập dữ liệu"
        ],
        answer: "Có"
    },
    {
        id: 94,
        chapter: 2,
        question: "2.44. Trong một bài toán hồi quy logistic, có 300 trường hợp. 270 người đã bỏ phiếu. 30 người không bỏ phiếu. Xác suất tìm thấy một người đã bỏ phiếu là bao nhiêu?",
        options: [
            "10%",
            "90%",
            "0,9",
            "0,1"
        ],
        answer: "0,9"
    },
    {
        id: 95,
        chapter: 2,
        question: "2.45. Hồi quy logistic được sử dụng khi:",
        options: [
            "Dự đoán một biến nhị phân từ các biến liên tục hoặc nhị phân.",
            "Dự đoán một biến liên tục từ các biến nhị phân.",
            "Dự đoán bất kỳ biến phân loại nào từ một số biến phân loại khác.",
            "Dự đoán một biến liên tục từ các biến nhị phân hoặc liên tục."
        ],
        answer: "Dự đoán một biến nhị phân từ các biến liên tục hoặc nhị phân."
    },
    {
        id: 96,
        chapter: 2,
        question: "2.46. Tỷ lệ cược là:",
        options: [
            "Tỷ lệ giữa xác suất một sự kiện không xảy ra với xác suất sự kiện đó xảy ra.",
            "Xác suất một sự kiện xảy ra.",
            "Tỷ lệ cược sau khi thay đổi một đơn vị trong bộ dự đoán so với tỷ lệ cược ban đầu.",
            "Tỷ lệ cược của một sự kiện xảy ra với xác suất sự kiện đó không xảy ra."
        ],
        answer: "Tỷ lệ cược sau khi thay đổi một đơn vị trong bộ dự đoán so với tỷ lệ cược ban đầu."
        // Key is C. Note: Technically "Odds" usually means P/(1-P) (Option D), but source key says C.
    },
    {
        id: 97,
        chapter: 2,
        question: "2.47. Các giá trị lớn của thống kê log-likelihood chỉ ra rằng:",
        options: [
            "Có nhiều quan sát được giải thích so với quan sát không được giải thích hơn.",
            "Mô hình thống kê phù hợp với dữ liệu.",
            "Khi biến dự báo tăng, khả năng xảy ra kết quả giảm.",
            "Mô hình thống kê không phù hợp với dữ liệu."
        ],
        answer: "Mô hình thống kê không phù hợp với dữ liệu."
    },
    {
        id: 98,
        chapter: 2,
        question: "2.48. Hồi quy logistic giả định:",
        options: [
            "Mối quan hệ tuyến tính giữa các biến dự báo liên tục và biến kết quả.",
            "Mối quan hệ tuyến tính giữa các biến dự báo liên tục và logit của biến kết quả.",
            "Mối quan hệ tuyến tính giữa các biến dự báo liên tục.",
            "Mối quan hệ tuyến tính giữa các quan sát."
        ],
        answer: "Mối quan hệ tuyến tính giữa các biến dự báo liên tục và logit của biến kết quả."
    },
    {
        id: 99,
        chapter: 2,
        question: "2.49. Trong hồi quy logistic nhị phân:",
        options: [
            "Biến phụ thuộc là liên tục.",
            "Biến phụ thuộc được chia thành hai tiểu loại bằng nhau.",
            "Biến phụ thuộc bao gồm hai loại.",
            "Không có biến phụ thuộc."
        ],
        answer: "Biến phụ thuộc bao gồm hai loại."
    },
    {
        id: 100,
        chapter: 2,
        question: "2.50. Lựa chọn nào sau đây đúng về 'Hồi quy' và 'Tương quan'? Lưu ý: y là biến phụ thuộc và x là biến độc lập.",
        options: [
            "Mối quan hệ đối xứng giữa x và y ở cả hai",
            "Mối quan hệ không đối xứng giữa x và y ở cả hai",
            "Mối quan hệ không đối xứng",
            "Mối quan hệ đối xứng giữa x và y trong trường hợp tương quan nhưng trong trường hợp hồi quy thì nó không đối xứng"
        ],
        answer: "Mối quan hệ đối xứng giữa x và y trong trường hợp tương quan nhưng trong trường hợp hồi quy thì nó không đối xứng"
    },
	// --- BẮT ĐẦU CHƯƠNG 3: NAÏVE BAYES ---
    {
        id: 101,
        chapter: 3,
        question: "3.1. Thuật toán phân loại Naïve Bayes chỉ được sử dụng trong phân loại văn bản.",
        options: [
            "Đúng",
            "Sai"
        ],
        answer: "Sai"
    },
    {
        id: 102,
        chapter: 3,
        question: "3.2. Công thức của định lý Bayes là gì? (Trong đó A, B là biến cố và P(B) ≠ 0)",
        options: [
            "P(H|E) = P(E|H) * P(E) / P(H)",
            "P(A|B) = P(A|B) * P(A) / P(B)",
            "P(H|E) = P(H|E) * P(H) / P(E)",
            "P(A|B) = P(B|A) * P(A) / P(B)"
        ],
        answer: "P(A|B) = P(B|A) * P(A) / P(B)"
    },
    {
        id: 103,
        chapter: 3,
        question: "3.3. Naïve Bayes là gì?",
        options: [
            "Một thuật toán học không giám sát",
            "Một phương pháp phân cụm dữ liệu",
            "Một thuật toán học có giám sát",
            "Một phương pháp giảm kích thước"
        ],
        answer: "Một thuật toán học có giám sát"
    },
    {
        id: 104,
        chapter: 3,
        question: "3.4. Giả định cơ bản của thuật toán Naïve Bayes là gì?",
        options: [
            "Các đặc trưng (features) phụ thuộc lẫn nhau",
            "Các đặc trưng (features) độc lập với nhau",
            "Các đặc trưng (features) là tuyến tính",
            "Các đặc trưng (features) đều có phân phối chuẩn"
        ],
        answer: "Các đặc trưng (features) độc lập với nhau"
    },
    {
        id: 105,
        chapter: 3,
        question: "3.5. Naïve Bayes sử dụng loại định lý nào để tính xác suất?",
        options: [
            "Định lý Bayes",
            "Định lý Markov",
            "Định lý Lagrange",
            "Định lý Bayes–Nash"
        ],
        answer: "Định lý Bayes"
    },
    {
        id: 106,
        chapter: 3,
        question: "3.6. Naïve Bayes thường được sử dụng trong các bài toán nào?",
        options: [
            "Hồi quy tuyến tính",
            "Phân loại văn bản",
            "Phân cụm dữ liệu",
            "Giảm kích thước dữ liệu"
        ],
        answer: "Phân loại văn bản"
    },
    {
        id: 107,
        chapter: 3,
        question: "3.7. Thuật toán Naïve Bayes hoạt động tốt nhất khi nào?",
        options: [
            "Khi các đặc trưng phụ thuộc lẫn nhau",
            "Khi các đặc trưng độc lập hoàn toàn với nhau",
            "Khi các đặc trưng không có mối quan hệ nào với nhau",
            "Khi dữ liệu là phi tuyến tính"
        ],
        answer: "Khi các đặc trưng độc lập hoàn toàn với nhau"
    },
    {
        id: 108,
        chapter: 3,
        question: "3.8. Naïve Bayes có thể áp dụng cho loại dữ liệu nào?",
        options: [
            "Dữ liệu liên tục",
            "Dữ liệu phân loại",
            "Cả A và B",
            "Không loại nào trong số này"
        ],
        answer: "Cả A và B"
    },
    {
        id: 109,
        chapter: 3,
        question: "3.9. Trong Naïve Bayes, nếu một đặc trưng (feature) chưa từng xuất hiện trong tập huấn luyện, thì xác suất của nó sẽ là bao nhiêu?",
        options: [
            "Bằng 0",
            "Bằng 1",
            "Bằng 0.5",
            "Không xác định"
        ],
        answer: "Bằng 0"
    },
    {
        id: 110,
        chapter: 3,
        question: "3.10. Giải pháp nào thường được sử dụng để xử lý vấn đề đặc trưng có xác suất bằng 0 trong Naïve Bayes?",
        options: [
            "Regularization",
            "Cross-validation",
            "Smoothing (Làm mịn)",
            "Data augmentation"
        ],
        answer: "Smoothing (Làm mịn)"
    },
    {
        id: 111,
        chapter: 3,
        question: "3.11. Một trong những biến thể của Naïve Bayes là gì?",
        options: [
            "Gaussian Naïve Bayes",
            "Logistic Naïve Bayes",
            "Decision Tree Naïve Bayes",
            "K-Nearest Naïve Bayes"
        ],
        answer: "Gaussian Naïve Bayes"
    },
    {
        id: 112,
        chapter: 3,
        question: "3.12. Thuật toán Naïve Bayes thuộc loại thuật toán học máy nào?",
        options: [
            "Thuật toán phân loại",
            "Thuật toán hồi quy",
            "Thuật toán phân cụm",
            "Thuật toán tìm kiếm"
        ],
        answer: "Thuật toán phân loại"
    },
    {
        id: 113,
        chapter: 3,
        question: "3.13. Smoothing (làm mịn) trong Naïve Bayes giúp giải quyết vấn đề gì?",
        options: [
            "Giảm kích thước dữ liệu",
            "Giải quyết vấn đề xác suất bằng 0",
            "Tăng tốc độ xử lý",
            "Giảm độ chính xác"
        ],
        answer: "Giải quyết vấn đề xác suất bằng 0"
    },
    {
        id: 114,
        chapter: 3,
        question: "3.14. Loại smoothing nào phổ biến nhất trong Naïve Bayes?",
        options: [
            "L1 Smoothing",
            "L2 Smoothing",
            "Laplace Smoothing",
            "Gaussian Smoothing"
        ],
        answer: "Laplace Smoothing"
    },
    {
        id: 115,
        chapter: 3,
        question: "3.15. Thuật toán Naïve Bayes thường được áp dụng trong bài toán nào sau đây?",
        options: [
            "Phân loại email spam",
            "Phân cụm khách hàng",
            "Tính toán giá nhà",
            "Tìm kiếm đồ vật trong hình ảnh"
        ],
        answer: "Phân loại email spam"
    },
    {
        id: 116,
        chapter: 3,
        question: "3.16. Naïve Bayes có thể xử lý tốt dữ liệu nào?",
        options: [
            "Dữ liệu phi tuyến tính",
            "Dữ liệu tuyến tính",
            "Cả A và B",
            "Dữ liệu không có phân phối cụ thể"
        ],
        answer: "Cả A và B"
    },
    {
        id: 117,
        chapter: 3,
        question: "3.17. Naïve Bayes có thể áp dụng cho bài toán phân loại đa lớp (multi-class classification) không?",
        options: [
            "Có",
            "Không"
        ],
        answer: "Có"
    },
    {
        id: 118,
        chapter: 3,
        question: "3.18. Một ưu điểm của Naïve Bayes là gì?",
        options: [
            "Độ phức tạp tính toán cao",
            "Không yêu cầu nhiều dữ liệu để huấn luyện",
            "Khó hiểu và phức tạp",
            "Không hoạt động tốt với dữ liệu rời rạc"
        ],
        answer: "Không yêu cầu nhiều dữ liệu để huấn luyện"
    },
    {
        id: 119,
        chapter: 3,
        question: "3.19. Một nhược điểm của Naïve Bayes là gì?",
        options: [
            "Yêu cầu nhiều tài nguyên tính toán",
            "Giả định rằng các đặc trưng độc lập, điều này không luôn luôn đúng",
            "Khó cài đặt và triển khai",
            "Không thể xử lý dữ liệu liên tục"
        ],
        answer: "Giả định rằng các đặc trưng độc lập, điều này không luôn luôn đúng"
    },
    {
        id: 120,
        chapter: 3,
        question: "3.20. Gaussian Naïve Bayes thường được áp dụng cho loại dữ liệu nào?",
        options: [
            "Dữ liệu rời rạc",
            "Dữ liệu liên tục",
            "Dữ liệu phân loại",
            "Dữ liệu văn bản"
        ],
        answer: "Dữ liệu liên tục"
    },
    {
        id: 121,
        chapter: 3,
        question: "3.21. Câu nào sau đây không đúng về thuật toán phân loại Naïve Bayes?",
        options: [
            "Thuật toán này không thể sử dụng cho cả phân loại nhị phân cũng như phân loại đa lớp",
            "Đây là lựa chọn phổ biến nhất cho các vấn đề phân loại văn bản",
            "Thuật toán này hoạt động tốt trong dự đoán đa lớp so với các thuật toán khác",
            "Đây là một trong những thuật toán học máy nhanh và dễ dàng để dự đoán một lớp tập dữ liệu thử nghiệm"
        ],
        answer: "Thuật toán này không thể sử dụng cho cả phân loại nhị phân cũng như phân loại đa lớp"
    },
    {
        id: 122,
        chapter: 3,
        question: "3.22. Có hai hộp. Hộp 1: 3 trắng, 2 đỏ. Hộp 2: 5 trắng, 4 đỏ. Một quả bóng được rút ngẫu nhiên từ một trong hai hộp và là màu TRẮNG. Xác suất quả bóng đó từ hộp thứ hai là bao nhiêu?",
        options: [
            "53/50",
            "50/104",
            "54/104",
            "54/44"
        ],
        answer: "50/104"
    },
    {
        id: 123,
        chapter: 3,
        question: "3.23. Chọn ngẫu nhiên một hộp và rút ra hai quả bóng từ hộp đó. Các quả bóng có màu Green và Blue. Xác suất để quả bóng được chọn là từ hộp đầu tiên là bao nhiêu?",
        options: [
            "37/18",
            "15/56",
            "18/37",
            "56/15"
        ],
        answer: "18/37"
    },
    {
        id: 124,
        chapter: 3,
        question: "3.24. Sắp xếp trình tự các bước để tính xác suất thông qua bộ phân loại Naïve Bayes:\n I. Tìm xác suất khả năng xảy ra với mỗi thuộc tính cho mỗi lớp.\n II. Tính xác suất trước cho các nhãn lớp đã cho.\n III. Đặt các giá trị này vào công thức Bayes và tính xác suất sau.\n IV. Xem lớp nào có xác suất cao hơn.",
        options: [
            "I → II → III → IV",
            "II → I → III → IV",
            "III → II → I → IV",
            "II → III → I → IV"
        ],
        answer: "II → I → III → IV"
    },
    {
        id: 125,
        chapter: 3,
        question: "3.25. Bộ phân loại Naïve Bayes sẽ phân lớp lớp nào với x1 = 1 và x2 = 0?",
        options: [
            "16",
            "26",
            "31",
            "32"
        ],
        answer: "31"
    },
    {
        id: 126,
        chapter: 3,
        question: "3.26. Hãy phân loại một trường hợp mới có Confident=Yes, Studied=Yes và Sick=No.",
        options: [
            "Pass",
            "Fail"
        ],
        answer: "Pass"
    },
    {
        id: 127,
        chapter: 3,
        question: "3.27. Chúng ta sẽ thực hiện phân loại Naïve Bayes như thế nào nếu một số thuộc tính bị thiếu?",
        options: [
            "Coi các giá trị bị thiếu bằng giá trị trung bình của tất cả các giá trị.",
            "Tính xác suất các thuộc tính bị thiếu bằng 0.",
            "Chỉ sử dụng các thuộc tính còn lại để tính toán xác suất hậu nghiệm.",
            "Không thực hiện được."
        ],
        answer: "Chỉ sử dụng các thuộc tính còn lại để tính toán xác suất hậu nghiệm."
    },
	// --- BẮT ĐẦU CHƯƠNG 4: k-NEAREST NEIGHBORS (kNN) ---
    {
        id: 128,
        chapter: 4,
        question: "4.1. Trong hình ảnh biểu đồ đường cong lỗi (Error rate vs k-Value), giá trị nào tốt nhất cho k giả sử rằng thuật toán bạn đang sử dụng là k-NN?",
        options: [
            "3",
            "10",
            "20",
            "50"
        ],
        answer: "10" 
        // Dựa trên biểu đồ (min validation error), đáp án B trong key là 10
    },
    {
        id: 129,
        chapter: 4,
        question: "4.2. Thước đo khoảng cách nào sau đây không thể được sử dụng trong k-NN?",
        options: [
            "Manhattan",
            "Minkowski",
            "Tanimoto",
            "Tất cả đều có thể sử dụng được"
        ],
        answer: "Tất cả đều có thể sử dụng được"
    },
    {
        id: 130,
        chapter: 4,
        question: "4.3. Lựa chọn nào sau đây đúng về thuật toán k-NN?",
        options: [
            "Nó có thể được sử dụng để phân loại",
            "Nó có thể được sử dụng để hồi quy",
            "Nó có thể được sử dụng trong cả phân loại và hồi quy",
            "Không có đáp án nào đúng"
        ],
        answer: "Nó có thể được sử dụng trong cả phân loại và hồi quy"
    },
    {
        id: 131,
        chapter: 4,
        question: "4.4. Điều nào sau đây đúng về khoảng cách Manhattan?",
        options: [
            "Nó có thể được sử dụng cho các biến liên tục",
            "Nó có thể được sử dụng cho các biến phân loại",
            "Nó có thể được sử dụng cho các biến phân loại cũng như liên tục",
            "Không có đáp án nào trong các đáp án trên"
        ],
        answer: "Nó có thể được sử dụng cho các biến liên tục"
    },
    {
        id: 132,
        chapter: 4,
        question: "4.5. Khoảng cách nào sau đây sẽ là Khoảng cách Euclide giữa hai điểm dữ liệu A(1,3) và B(2,3)?",
        options: [
            "1",
            "2",
            "4",
            "8"
        ],
        answer: "1"
    },
    {
        id: 133,
        chapter: 4,
        question: "4.6. Giá trị nào sau đây sẽ là Khoảng cách Manhattan giữa hai điểm dữ liệu A(1,3) và B(2,3)?",
        options: [
            "1",
            "2",
            "4",
            "8"
        ],
        answer: "1"
    },
    {
        id: 134,
        chapter: 4,
        question: "4.7. Khi bạn tìm thấy nhiễu trong dữ liệu, bạn sẽ cân nhắc lựa chọn nào sau đây trong k-NN?",
        options: [
            "Tôi sẽ tăng giá trị của k",
            "Tôi sẽ giảm giá trị của k",
            "Nhiễu không phụ thuộc vào giá trị của k",
            "Không có đáp án nào trong các đáp án trên"
        ],
        answer: "Tôi sẽ tăng giá trị của k"
    },
    {
        id: 135,
        chapter: 4,
        question: "4.8. Trong k-NN, rất có thể bị quá khớp do lời nguyền về chiều. Bạn sẽ cân nhắc lựa chọn nào sau đây để giải quyết vấn đề như vậy? (1. Giảm kích thước, 2. Lựa chọn tính năng)",
        options: [
            "Giảm kích thước",
            "Lựa chọn tính năng",
            "Cả 1 và 2",
            "Không có đáp án nào trong các đáp án trên"
        ],
        answer: "Cả 1 và 2"
    },
    {
        id: 136,
        chapter: 4,
        question: "4.9. Một công ty đã xây dựng một bộ phân loại kNN có độ chính xác 100% đối với dữ liệu huấn luyện. Khi triển khai, mô hình này hoàn toàn không chính xác. Điều nào sau đây có thể sai?",
        options: [
            "Đây có thể là một mô hình được huấn luyện quá khớp",
            "Có lẽ đây là tập mẫu không được trang bị phù hợp",
            "Cả hai đều sai",
            "Không có vấn đề gì"
        ],
        answer: "Đây có thể là một mô hình được huấn luyện quá khớp"
    },
    {
        id: 137,
        chapter: 4,
        question: "4.10. Hãy quan sát 2 câu sau: (1) Trong trường hợp giá trị k rất lớn, chúng ta có thể gộp các điểm từ các lớp khác vào vùng lân cận. (2) Trong trường hợp giá trị k quá nhỏ thì thuật toán rất nhạy cảm với nhiễu. Hãy tìm câu đúng:",
        options: [
            "Chỉ 1 đúng",
            "Chỉ 2 đúng",
            "Cả 1 và 2 đều đúng",
            "Không có đáp án nào đúng"
        ],
        answer: "Cả 1 và 2 đều đúng"
    },
    {
        id: 138,
        chapter: 4,
        question: "4.11. Câu nào sau đây đúng với bộ phân loại k-NN?",
        options: [
            "Độ chính xác phân loại tốt hơn với giá trị k lớn hơn",
            "Ranh giới quyết định mượt mà hơn với giá trị k nhỏ hơn",
            "Ranh giới quyết định là tuyến tính",
            "k-NN không yêu cầu bước đào tạo rõ ràng"
        ],
        answer: "k-NN không yêu cầu bước đào tạo rõ ràng"
    },
    {
        id: 139,
        chapter: 4,
        question: "4.12. Trong k-NN điều gì sẽ xảy ra khi bạn tăng/giảm giá trị của k?",
        options: [
            "Ranh giới trở nên mịn hơn khi giá trị K tăng",
            "Ranh giới trở nên mịn hơn khi giá trị K giảm",
            "Độ mịn của ranh giới không phụ thuộc vào giá trị của K",
            "Không có đáp án nào trong các đáp án trên"
        ],
        answer: "Ranh giới trở nên mịn hơn khi giá trị K tăng"
    },
    {
        id: 140,
        chapter: 4,
        question: "4.13. Mối quan hệ giữa thời gian thực hiện của 1-NN, 2-NN, 3-NN là gì?",
        options: [
            "1-NN > 2-NN > 3-NN",
            "1-NN < 2-NN < 3-NN",
            "1-NN ~ 2-NN ~ 3-NN",
            "Không có đáp án nào trong số đáp án trên."
        ],
        answer: "1-NN ~ 2-NN ~ 3-NN"
    },
    {
        id: 141,
        chapter: 4,
        question: "4.14. Giả sử bạn muốn dự đoán lớp của điểm dữ liệu mới x=1 và y=1 bằng khoảng cách Euclidian trong 3-NN. Dựa trên dữ liệu huấn luyện: (-1,1,-), (0,1,+), (0,2,-), (1,-1,-). Điểm dữ liệu này thuộc về lớp nào?",
        options: [
            "Lớp +",
            "Lớp –",
            "Không thể biết",
            "Không có đáp án nào trong các đáp án trên"
        ],
        answer: "Lớp +"
    },
    {
        id: 142,
        chapter: 4,
        question: "4.15. Trong câu hỏi 14, bây giờ nếu ta sử dụng 7-NN thay vì 3-NN thì điểm x=1 và y=1 sẽ thuộc về lớp nào?",
        options: [
            "Class +",
            "Class –",
            "Không có đáp án nào trong các đáp án trên",
            "Không thể xác định"
        ],
        answer: "Class –"
    },
    {
        id: 143,
        chapter: 4,
        question: "4.16. kNN thuộc loại thuật toán nào?",
        options: [
            "Học có giám sát",
            "Học không giám sát",
            "Học tăng cường",
            "Học bán giám sát"
        ],
        answer: "Học có giám sát"
    },
    {
        id: 144,
        chapter: 4,
        question: "4.17. Khi nào nên sử dụng kNN?",
        options: [
            "Khi dữ liệu nhỏ và dễ tính toán",
            "Khi dữ liệu lớn và phân bố không đồng đều",
            "Khi cần xử lý dữ liệu phức tạp và nhiều chiều",
            "Khi cần mô hình huấn luyện nhanh"
        ],
        answer: "Khi dữ liệu nhỏ và dễ tính toán"
    },
    {
        id: 145,
        chapter: 4,
        question: "4.18. Trong kNN, yếu tố nào quyết định lớp của điểm cần dự đoán?",
        options: [
            "Kích thước tập huấn luyện",
            "K láng giềng gần nhất",
            "Khoảng cách giữa các đặc trưng",
            "Loại mô hình học máy"
        ],
        answer: "K láng giềng gần nhất"
    },
    {
        id: 146,
        chapter: 4,
        question: "4.19. Khi số lượng k tăng quá lớn, kNN thường gặp vấn đề gì?",
        options: [
            "Mô hình quá khớp (overfitting)",
            "Mô hình không khớp (underfitting)",
            "Giảm chi phí tính toán",
            "Tăng độ chính xác"
        ],
        answer: "Mô hình không khớp (underfitting)"
    },
    {
        id: 147,
        chapter: 4,
        question: "4.20. Khi k giảm quá nhỏ (ví dụ k=1), kNN thường gặp vấn đề gì?",
        options: [
            "Mô hình quá khớp (overfitting)",
            "Mô hình không khớp (underfitting)",
            "Giảm chi phí tính toán",
            "Hiệu suất tăng"
        ],
        answer: "Mô hình quá khớp (overfitting)"
    },
    {
        id: 148,
        chapter: 4,
        question: "4.21. Metric phổ biến nhất để đo khoảng cách trong kNN là gì?",
        options: [
            "Khoảng cách Manhattan",
            "Khoảng cách Cosine",
            "Khoảng cách Euclidean",
            "Khoảng cách Mahalanobis"
        ],
        answer: "Khoảng cách Euclidean"
    },
    {
        id: 149,
        chapter: 4,
        question: "4.22. Thuật toán kNN có yêu cầu quá trình huấn luyện (training) không?",
        options: [
            "Có",
            "Không"
        ],
        answer: "Không"
    },
    {
        id: 150,
        chapter: 4,
        question: "4.23. Phương pháp nào được sử dụng để cải thiện hiệu quả tính toán kNN trong không gian nhiều chiều?",
        options: [
            "Tăng kích thước tập huấn luyện",
            "Giảm kích thước tập huấn luyện",
            "Sử dụng các cấu trúc như KD-tree",
            "Thử nghiệm với nhiều giá trị k"
        ],
        answer: "Sử dụng các cấu trúc như KD-tree"
    },
    {
        id: 151,
        chapter: 4,
        question: "4.24. Metric phổ biến nhất để đo khoảng cách trong kNN là gì? (Câu hỏi lặp lại nhưng options khác)",
        options: [
            "Số lượng láng giềng",
            "Khoảng cách đến điểm dự đoán",
            "Số lượng dữ liệu huấn luyện",
            "Kích thước đặc trưng"
        ],
        answer: "Số lượng dữ liệu huấn luyện" 
        // Lưu ý: Key của file là C, mặc dù câu hỏi có vẻ không khớp với options. Giữ nguyên theo tài liệu gốc.
    },
    {
        id: 152,
        chapter: 4,
        question: "4.25. Bayesian Optimization thường được sử dụng để làm gì trong kNN?",
        options: [
            "Chọn khoảng cách tốt nhất",
            "Chọn giá trị k tối ưu",
            "Tăng tốc độ tính toán",
            "Tạo tập dữ liệu mới"
        ],
        answer: "Chọn giá trị k tối ưu"
    },
    {
        id: 153,
        chapter: 4,
        question: "4.26. Khi nào nên sử dụng kNN bán giám sát?",
        options: [
            "Khi có nhiều dữ liệu đã gán nhãn",
            "Khi có ít dữ liệu đã gán nhãn nhưng nhiều dữ liệu chưa gán nhãn",
            "Khi không có dữ liệu huấn luyện",
            "Khi muốn giảm số lượng k"
        ],
        answer: "Khi có ít dữ liệu đã gán nhãn nhưng nhiều dữ liệu chưa gán nhãn"
    },
    {
        id: 154,
        chapter: 4,
        question: "4.27. Phương pháp giảm chiều nào thường được sử dụng trước khi áp dụng kNN?",
        options: [
            "Gradient Descent",
            "Principal Component Analysis (PCA)",
            "Stochastic Gradient Descent",
            "Backpropagation"
        ],
        answer: "Principal Component Analysis (PCA)"
    },
    {
        id: 155,
        chapter: 4,
        question: "4.28. Trong các bài toán phân loại, kNN đưa ra dự đoán dựa trên yếu tố nào?",
        options: [
            "Đếm số phiếu bầu của các láng giềng gần nhất",
            "Trung bình giá trị của các láng giềng gần nhất",
            "Tỷ lệ giữa các giá trị trong tập dữ liệu",
            "Tính toán xác suất của mỗi lớp"
        ],
        answer: "Đếm số phiếu bầu của các láng giềng gần nhất"
    },
    {
        id: 156,
        chapter: 4,
        question: "4.29. kNN hoạt động tốt nhất với loại dữ liệu nào?",
        options: [
            "Dữ liệu nhiều chiều",
            "Dữ liệu có cấu trúc cụm rõ ràng",
            "Dữ liệu liên tục",
            "Dữ liệu với nhiều biến danh mục"
        ],
        answer: "Dữ liệu có cấu trúc cụm rõ ràng"
    },
    {
        id: 157,
        chapter: 4,
        question: "4.30. Điều gì xảy ra nếu tất cả các k láng giềng đều thuộc các lớp khác nhau trong một bài toán phân loại?",
        options: [
            "Mô hình sẽ không dự đoán được",
            "Mô hình sẽ chọn lớp ngẫu nhiên",
            "Mô hình sẽ chọn lớp có nhiều phiếu nhất trong tập huấn luyện",
            "Mô hình sẽ áp dụng nguyên tắc bỏ phiếu thiểu số"
        ],
        answer: "Mô hình sẽ chọn lớp ngẫu nhiên"
    },
    {
        id: 158,
        chapter: 4,
        question: "4.31. Kỹ thuật nào giúp tối ưu hóa việc chọn k trong kNN?",
        options: [
            "Cross-Validation",
            "Gradient Descent",
            "Boosting",
            "Random Forest"
        ],
        answer: "Cross-Validation"
    },
    {
        id: 159,
        chapter: 4,
        question: "4.32. Tại sao kNN không hiệu quả khi dữ liệu quá lớn?",
        options: [
            "Vì kNN cần xử lý nhiều láng giềng cùng lúc",
            "Vì khoảng cách giữa các điểm trong không gian lớn không có ý nghĩa (Curse of dimensionality)",
            "Vì kNN không thể xử lý nhiều điểm dữ liệu",
            "Vì không gian tính toán lớn hơn sẽ giảm độ chính xác"
        ],
        answer: "Vì khoảng cách giữa các điểm trong không gian lớn không có ý nghĩa (Curse of dimensionality)"
    },
    {
        id: 160,
        chapter: 4,
        question: "4.33. Cấu trúc dữ liệu nào không được sử dụng để tối ưu hóa kNN?",
        options: [
            "KD-trees",
            "Ball-trees",
            "Locality Sensitive Hashing (LSH)",
            "Convolutional Neural Networks (CNN)"
        ],
        answer: "Convolutional Neural Networks (CNN)"
    },
    {
        id: 161,
        chapter: 4,
        question: "4.34. Một trong những thách thức chính khi sử dụng kNN trong không gian nhiều chiều là gì?",
        options: [
            "Kích thước dữ liệu quá nhỏ",
            "Curse of Dimensionality",
            "K không phù hợp",
            "Dữ liệu có nhiễu"
        ],
        answer: "Curse of Dimensionality"
    },
    {
        id: 162,
        chapter: 4,
        question: "4.35. Trong bài toán hồi quy, kNN dự đoán giá trị cho điểm mới bằng cách nào?",
        options: [
            "Trung bình giá trị của k láng giềng gần nhất",
            "Sử dụng giá trị lớn nhất của k láng giềng gần nhất",
            "Chọn giá trị của láng giềng gần nhất",
            "Lấy giá trị trung bình của toàn bộ dữ liệu"
        ],
        answer: "Trung bình giá trị của k láng giềng gần nhất"
    },
	// --- BẮT ĐẦU CHƯƠNG 5: CÂY QUYẾT ĐỊNH ---
    {
        id: 163,
        chapter: 5,
        question: "5.1. Cây quyết định là kỹ thuật học máy nào?",
        options: [
            "Phân cụm",
            "Hồi quy",
            "Phân loại và hồi quy",
            "Khai phá dữ liệu"
        ],
        answer: "Phân loại và hồi quy"
    },
    {
        id: 164,
        chapter: 5,
        question: "5.2. Trong cây quyết định, mỗi nút lá đại diện cho:",
        options: [
            "Một thuộc tính",
            "Một quyết định",
            "Một giá trị phân loại hoặc dự đoán",
            "Một phân vùng dữ liệu"
        ],
        answer: "Một giá trị phân loại hoặc dự đoán"
    },
    {
        id: 165,
        chapter: 5,
        question: "5.3. Thuật toán xây dựng cây quyết định hoạt động theo cơ chế nào?",
        options: [
            "Phân chia dữ liệu thành nhiều nhóm ngẫu nhiên",
            "Chia dữ liệu thành các nhóm dựa trên độ đo lựa chọn thuộc tính",
            "Lựa chọn thuộc tính có giá trị lớn nhất",
            "Loại bỏ thuộc tính thiếu"
        ],
        answer: "Chia dữ liệu thành các nhóm dựa trên độ đo lựa chọn thuộc tính"
    },
    {
        id: 166,
        chapter: 5,
        question: "5.4. Độ đo nào thường được sử dụng để chọn thuộc tính phân chia trong cây quyết định?",
        options: [
            "Khoảng cách Euclidean",
            "Entropy",
            "Tích phân",
            "Xác suất"
        ],
        answer: "Entropy"
    },
    {
        id: 167,
        chapter: 5,
        question: "5.5. Khi nào cần tiến hành cắt tỉa cây quyết định?",
        options: [
            "Khi dữ liệu không đồng nhất",
            "Khi cây quá phức tạp và có khả năng bị overfitting",
            "Khi dữ liệu quá ít",
            "Khi không có đủ thuộc tính"
        ],
        answer: "Khi cây quá phức tạp và có khả năng bị overfitting"
    },
    {
        id: 168,
        chapter: 5,
        question: "5.6. Cắt tỉa trước (pre-pruning) là quá trình:",
        options: [
            "Loại bỏ các nhánh nhỏ ngay từ đầu",
            "Ngăn chặn việc phát triển cây sớm",
            "Phát triển toàn bộ cây và sau đó loại bỏ các nhánh không cần thiết",
            "Tăng cường độ phức tạp của cây"
        ],
        answer: "Ngăn chặn việc phát triển cây sớm"
    },
    {
        id: 169,
        chapter: 5,
        question: "5.7. Phương pháp cắt tỉa sau (post-pruning) hoạt động như thế nào?",
        options: [
            "Phát triển toàn bộ cây và sau đó loại bỏ các nhánh không cần thiết",
            "Dừng phát triển cây tại các nhánh ngẫu nhiên",
            "Tách các nút để tăng hiệu quả",
            "Không cần thiết trong mọi trường hợp"
        ],
        answer: "Phát triển toàn bộ cây và sau đó loại bỏ các nhánh không cần thiết"
    },
    {
        id: 170,
        chapter: 5,
        question: "5.8. Lợi ích chính của việc cắt tỉa cây quyết định là:",
        options: [
            "Tăng độ chính xác trên tập huấn luyện",
            "Giảm khả năng overfitting và đơn giản hóa mô hình",
            "Giảm kích thước tập dữ liệu",
            "Loại bỏ các thuộc tính không cần thiết"
        ],
        answer: "Giảm khả năng overfitting và đơn giản hóa mô hình"
    },
    {
        id: 171,
        chapter: 5,
        question: "5.9. Cây quyết định được sử dụng trong bài toán hồi quy khi:",
        options: [
            "Dữ liệu là dạng phân loại",
            "Dữ liệu liên tục và cần dự đoán giá trị số",
            "Dữ liệu văn bản",
            "Dữ liệu hình ảnh"
        ],
        answer: "Dữ liệu liên tục và cần dự đoán giá trị số"
    },
    {
        id: 172,
        chapter: 5,
        question: "5.10. Một trong những hạn chế chính của cây quyết định là gì?",
        options: [
            "Dễ bị ảnh hưởng bởi overfitting",
            "Không thể xử lý dữ liệu lớn",
            "Không phù hợp với các bài toán phân loại",
            "Khó hiểu và giải thích"
        ],
        answer: "Dễ bị ảnh hưởng bởi overfitting"
    },
    {
        id: 173,
        chapter: 5,
        question: "5.11. Thuật toán ID3 sử dụng độ đo nào để chọn thuộc tính phân chia?",
        options: [
            "Khoảng cách Hamming",
            "Entropy",
            "Khoảng cách Manhattan",
            "Xác suất Bayes"
        ],
        answer: "Entropy"
    },
    {
        id: 174,
        chapter: 5,
        question: "5.12. Trong thuật toán C4.5, thuộc tính nào được ưu tiên lựa chọn?",
        options: [
            "Thuộc tính có giá trị trung bình",
            "Thuộc tính có thông tin đạt cực đại",
            "Thuộc tính có giá trị tối thiểu",
            "Thuộc tính không liên quan đến phân loại"
        ],
        answer: "Thuộc tính có thông tin đạt cực đại"
    },
    {
        id: 175,
        chapter: 5,
        question: "5.13. Khi xây dựng cây quyết định, overfitting thường xảy ra khi:",
        options: [
            "Dữ liệu có nhiều giá trị thiếu",
            "Cây quá lớn và phân chia quá sâu",
            "Dữ liệu không đủ lớn",
            "Có quá nhiều thuộc tính tương quan"
        ],
        answer: "Cây quá lớn và phân chia quá sâu"
    },
    {
        id: 176,
        chapter: 5,
        question: "5.14. Thuật toán CART khác với ID3 ở điểm nào?",
        options: [
            "Sử dụng Gini index thay vì Entropy",
            "Không dùng thông tin để chọn thuộc tính",
            "Phát triển cây theo thứ tự ngẫu nhiên",
            "Chỉ dùng cho dữ liệu văn bản"
        ],
        answer: "Sử dụng Gini index thay vì Entropy"
    },
    {
        id: 177,
        chapter: 5,
        question: "5.15. Một cách để giảm overfitting trong cây quyết định là:",
        options: [
            "Tăng chiều sâu của cây",
            "Giảm số lượng thuộc tính",
            "Sử dụng cắt tỉa cây",
            "Không xử lý giá trị thiếu"
        ],
        answer: "Sử dụng cắt tỉa cây"
    },
    {
        id: 178,
        chapter: 5,
        question: "5.16. Mục tiêu chính của thuật toán xây dựng cây quyết định là gì?",
        options: [
            "Tìm thuộc tính có độ lệch chuẩn thấp nhất",
            "Tìm thuộc tính phân chia dữ liệu một cách tối ưu",
            "Phân chia dữ liệu dựa trên thứ tự xuất hiện",
            "Giảm số lượng điểm dữ liệu"
        ],
        answer: "Tìm thuộc tính phân chia dữ liệu một cách tối ưu"
    },
    {
        id: 179,
        chapter: 5,
        question: "5.17. Cây quyết định thường sử dụng phương pháp nào để phân chia dữ liệu?",
        options: [
            "K-means clustering",
            "Phân chia dựa trên độ đo thông tin hoặc Gini index",
            "Hồi quy tuyến tính",
            "Phân cụm theo k láng giềng gần nhất"
        ],
        answer: "Phân chia dựa trên độ đo thông tin hoặc Gini index"
    },
    {
        id: 180,
        chapter: 5,
        question: "5.18. Khi nào nên sử dụng cắt tỉa theo độ dài mô tả tối thiểu (MDL)?",
        options: [
            "Khi muốn tối ưu hóa số bit cần thiết để mã hóa cây",
            "Khi cây quá phức tạp",
            "Khi dữ liệu có nhiều giá trị thiếu",
            "Khi không thể sử dụng các độ đo khác"
        ],
        answer: "Khi muốn tối ưu hóa số bit cần thiết để mã hóa cây"
    },
    {
        id: 181,
        chapter: 5,
        question: "5.19. Một ưu điểm của phương pháp kết hợp tiền cắt tỉa và hậu cắt tỉa là:",
        options: [
            "Đảm bảo cây luôn đơn giản",
            "Đạt được sự cân bằng giữa tính hiệu quả và độ chính xác",
            "Giảm độ phức tạp của thuộc tính",
            "Loại bỏ hoàn toàn các lỗi phân loại"
        ],
        answer: "Đạt được sự cân bằng giữa tính hiệu quả và độ chính xác"
    },
    {
        id: 182,
        chapter: 5,
        question: "5.20. Khi sử dụng cây quyết định, mục đích của việc chọn thuộc tính có độ đo tốt nhất là gì?",
        options: [
            "Tối thiểu hóa khoảng cách giữa các giá trị",
            "Tối ưu hóa phân chia dữ liệu và giảm độ phức tạp",
            "Tăng độ phức tạp của cây",
            "Giảm số lượng thuộc tính trong tập dữ liệu"
        ],
        answer: "Tối ưu hóa phân chia dữ liệu và giảm độ phức tạp"
    },
    {
        id: 183,
        chapter: 5,
        question: "5.21. Một tập dữ liệu có 100 mẫu, trong đó 60 mẫu thuộc lớp A và 40 mẫu thuộc lớp B. Độ hỗn loạn (entropy) của tập dữ liệu này là:",
        options: [
            "0.94",
            "1.00",
            "0.60",
            "0.75"
        ],
        answer: "0.94"
        // Note: - (0.6 * log2(0.6) + 0.4 * log2(0.4)) ≈ 0.97. Tuy nhiên, theo bảng đáp án gốc là A (0.94), nên mình giữ nguyên A.
    },
    {
        id: 184,
        chapter: 5,
        question: "5.22. Một thuộc tính X có 3 giá trị phân biệt. Nếu phân chia dữ liệu theo X, chúng ta thu được 3 nhóm với số lượng mẫu là 30, 50 và 20. Nếu entropy trước khi phân chia là 0.90, thông tin thu được (information gain) sau khi phân chia là bao nhiêu?",
        options: [
            "0.20",
            "0.30",
            "0.35",
            "0.25"
        ],
        answer: "0.20"
    },
    {
        id: 185,
        chapter: 5,
        question: "5.23. Cho một cây quyết định với độ sâu tối đa là 5 và có 3 thuộc tính nhị phân. Số lượng nút lá tối đa có thể có trong cây là:",
        options: [
            "32",
            "16",
            "10",
            "64"
        ],
        answer: "32" 
        // Note: 2^5 = 32.
    },
    {
        id: 186,
        chapter: 5,
        question: "5.24. Giả sử tập dữ liệu có 3 thuộc tính và 2 lớp phân loại. Số lượng phân chia có thể có (số lượng nút nội bộ có thể tạo ra) khi xây dựng một cây quyết định là:",
        options: [
            "6",
            "4",
            "8",
            "12"
        ],
        answer: "8" 
        // Note: Đáp án C trong bảng key là 8.
    },
    {
        id: 187,
        chapter: 5,
        question: "5.25. Nếu độ chính xác của một cây quyết định là 85% trên tập huấn luyện và 75% trên tập kiểm tra, thì độ chính xác của cây trên tập kiểm tra có thể được coi là:",
        options: [
            "Tốt hơn",
            "Kém hơn",
            "Bằng nhau",
            "Không thể xác định"
        ],
        answer: "Kém hơn"
    },
    {
        id: 188,
        chapter: 5,
        question: "5.26. Khi sử dụng phương pháp cắt tỉa cây (pruning), tỷ lệ lỗi của cây quyết định trên tập kiểm tra giảm từ 10% xuống 7%. Tỷ lệ giảm lỗi là:",
        options: [
            "20%",
            "30%",
            "40%",
            "50%"
        ],
        answer: "20%" 
        // Note: Đáp án A là 20%. Công thức: (10-7)/10 = 30%. Nhưng key là A (20%), có thể đề hoặc key nhầm, mình vẫn để theo key A để khớp bài kiểm tra.
    },
    {
        id: 189,
        chapter: 5,
        question: "5.27. Để xây dựng một cây quyết định, nếu mỗi thuộc tính có 4 giá trị khác nhau và có 5 thuộc tính, thì số lượng phân chia tối đa có thể tạo ra là:",
        options: [
            "20",
            "1024",
            "256",
            "625"
        ],
        answer: "1024"
        // Note: 4^5 = 1024. Key B là 1024.
    },
    {
        id: 190,
        chapter: 5,
        question: "5.28. Giả sử có một cây quyết định với 10 nút lá, mỗi nút lá có 2 lớp phân loại. Tổng số quyết định (decision) mà cây có thể đưa ra là:",
        options: [
            "10",
            "20",
            "2",
            "5"
        ],
        answer: "20"
    },
    {
        id: 191,
        chapter: 5,
        question: "5.29. Nếu entropy của một thuộc tính là 0.7 và độ chính xác của nó là 80%, thì chỉ số thông tin (information gain ratio) là:",
        options: [
            "0.35",
            "0.56",
            "0.50",
            "0.25"
        ],
        answer: "0.35" 
        // Note: Key A là 0.35.
    },
    {
        id: 192,
        chapter: 5,
        question: "5.30. Một cây quyết định với 5 thuộc tính đã được xây dựng. Số lượng khả năng cắt tỉa cho cây này là:",
        options: [
            "5",
            "10",
            "16",
            "32"
        ],
        answer: "32" 
        // Note: 2^5 = 32. Key D là 32.
    },
	// --- BẮT ĐẦU CHƯƠNG 6: SVM ---
    {
        id: 193,
        chapter: 6,
        question: "6.1. SVM là viết tắt của gì?",
        options: [
            "Support Vector Matrix",
            "Support Vector Machine",
            "Support Vector Model",
            "Support Vector Method"
        ],
        answer: "Support Vector Machine"
    },
    {
        id: 194,
        chapter: 6,
        question: "6.2. Trong SVM, một \"support vector\" là gì?",
        options: [
            "Điểm dữ liệu nằm trên biên quyết định",
            "Điểm dữ liệu nằm gần nhất với biên quyết định",
            "Điểm dữ liệu nằm xa biên quyết định",
            "Điểm dữ liệu không ảnh hưởng đến biên quyết định"
        ],
        answer: "Điểm dữ liệu nằm gần nhất với biên quyết định"
    },
    {
        id: 195,
        chapter: 6,
        question: "6.3. SVM có thể được sử dụng cho loại bài toán nào?",
        options: [
            "Phân loại",
            "Hồi quy",
            "Phân loại và hồi quy",
            "Clustering"
        ],
        answer: "Phân loại và hồi quy"
    },
    {
        id: 196,
        chapter: 6,
        question: "6.4. Thuật toán SVM tối ưu hóa điều gì?",
        options: [
            "Khoảng cách giữa các điểm dữ liệu",
            "Khoảng cách giữa các support vectors",
            "Khoảng cách giữa các class khác nhau",
            "Khoảng cách giữa biên quyết định và các support vectors (Tối đa hóa margin)"
        ],
        answer: "Khoảng cách giữa biên quyết định và các support vectors (Tối đa hóa margin)"
    },
    {
        id: 197,
        chapter: 6,
        question: "6.5. Trong SVM, kernel là gì?",
        options: [
            "Hàm ánh xạ từ không gian đầu vào lên không gian đặc trưng cao hơn",
            "Hàm xác định khoảng cách giữa các điểm dữ liệu",
            "Hàm tính toán lỗi dự đoán",
            "Hàm tính toán trọng số của mô hình"
        ],
        answer: "Hàm ánh xạ từ không gian đầu vào lên không gian đặc trưng cao hơn"
    },
    {
        id: 198,
        chapter: 6,
        question: "6.6. Kernel \"linear\" trong SVM thực hiện điều gì?",
        options: [
            "Tạo ra biên quyết định phi tuyến",
            "Tạo ra biên quyết định tuyến tính",
            "Tạo ra biên quyết định đa thức",
            "Không có sự khác biệt"
        ],
        answer: "Tạo ra biên quyết định tuyến tính"
    },
    {
        id: 199,
        chapter: 6,
        question: "6.7. Một trong những ưu điểm chính của SVM là gì?",
        options: [
            "Không cần điều chỉnh tham số",
            "Không nhạy cảm với dữ liệu nhiễu",
            "Hiệu quả cao khi số lượng dữ liệu lớn",
            "Khả năng làm việc tốt với dữ liệu có nhiều chiều"
        ],
        answer: "Khả năng làm việc tốt với dữ liệu có nhiều chiều"
    },
    {
        id: 200,
        chapter: 6,
        question: "6.8. Khi nào cần sử dụng SVM với kernel phi tuyến?",
        options: [
            "Khi dữ liệu không thể phân tách tuyến tính",
            "Khi dữ liệu quá lớn",
            "Khi không có support vectors",
            "Khi dữ liệu có nhiều chiều"
        ],
        answer: "Khi dữ liệu không thể phân tách tuyến tính"
    },
    {
        id: 201,
        chapter: 6,
        question: "6.9. Phương pháp \"soft margin\" trong SVM dùng để giải quyết vấn đề gì?",
        options: [
            "Khi dữ liệu không thể phân tách hoàn toàn (hoặc bị nhiễu)",
            "Khi số lượng dữ liệu quá ít",
            "Khi dữ liệu bị nhiễu",
            "Khi có quá nhiều support vectors"
        ],
        answer: "Khi dữ liệu không thể phân tách hoàn toàn (hoặc bị nhiễu)"
    },
    {
        id: 202,
        chapter: 6,
        question: "6.10. SVM với kernel \"RBF\" (Radial Basis Function) thực hiện gì?",
        options: [
            "Tạo ra biên quyết định tuyến tính",
            "Tạo ra biên quyết định phi tuyến trong không gian đặc trưng cao hơn",
            "Giảm số lượng support vectors",
            "Tăng số lượng support vectors"
        ],
        answer: "Tạo ra biên quyết định phi tuyến trong không gian đặc trưng cao hơn"
    },
    {
        id: 203,
        chapter: 6,
        question: "6.11. SVM là một thuật toán thuộc loại nào?",
        options: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Reinforcement Learning",
            "Semi-supervised Learning"
        ],
        answer: "Supervised Learning"
    },
    {
        id: 204,
        chapter: 6,
        question: "6.12. Biên quyết định (decision boundary) trong SVM là gì?",
        options: [
            "Đường phân chia các điểm dữ liệu thuộc các lớp khác nhau",
            "Đường nối các support vectors",
            "Đường phân chia các điểm dữ liệu tương tự",
            "Đường thể hiện lỗi của mô hình"
        ],
        answer: "Đường phân chia các điểm dữ liệu thuộc các lớp khác nhau"
    },
    {
        id: 205,
        chapter: 6,
        question: "6.13. Mục tiêu chính của SVM là gì?",
        options: [
            "Tối thiểu hóa khoảng cách giữa các support vectors",
            "Tối đa hóa khoảng cách giữa các lớp",
            "Tối đa hóa khoảng cách giữa các support vectors và biên quyết định (Tối đa hóa Margin)",
            "Tối đa hóa số lượng support vectors"
        ],
        answer: "Tối đa hóa khoảng cách giữa các support vectors và biên quyết định (Tối đa hóa Margin)"
    },
    {
        id: 206,
        chapter: 6,
        question: "6.14. Soft margin SVM cho phép điều gì?",
        options: [
            "Cho phép một số điểm dữ liệu nằm sai phía của biên quyết định",
            "Tăng số lượng support vectors",
            "Giảm số lượng support vectors",
            "Chọn biên quyết định tuyến tính"
        ],
        answer: "Cho phép một số điểm dữ liệu nằm sai phía của biên quyết định"
    },
    {
        id: 207,
        chapter: 6,
        question: "6.15. Trong SVM, tham số \"C\" ảnh hưởng như thế nào đến biên quyết định?",
        options: [
            "C lớn làm biên quyết định cứng hơn (ít lỗi hơn trên tập train, dễ overfitting)",
            "C nhỏ làm biên quyết định mềm hơn",
            "C lớn làm biên quyết định mềm hơn",
            "C nhỏ làm biên quyết định cứng hơn"
        ],
        answer: "C lớn làm biên quyết định cứng hơn (ít lỗi hơn trên tập train, dễ overfitting)"
    },
    {
        id: 208,
        chapter: 6,
        question: "6.16. Trong không gian đặc trưng cao hơn, biên quyết định của SVM có thể là gì?",
        options: [
            "Tuyến tính",
            "Phi tuyến",
            "Đa thức",
            "Tất cả các loại trên (Tùy thuộc vào việc ánh xạ ngược lại không gian gốc, nhưng trong không gian đặc trưng nó là siêu phẳng tuyến tính)"
        ],
        answer: "Tất cả các loại trên (Tùy thuộc vào việc ánh xạ ngược lại không gian gốc, nhưng trong không gian đặc trưng nó là siêu phẳng tuyến tính)"
    },
    {
        id: 209,
        chapter: 6,
        question: "6.17. Hàm kernel \"polynomial\" tạo ra biên quyết định dạng gì?",
        options: [
            "Tuyến tính",
            "Phi tuyến",
            "Đa thức (Biên phi tuyến dạng đa thức)",
            "Gaussian"
        ],
        answer: "Đa thức (Biên phi tuyến dạng đa thức)"
    },
    {
        id: 210,
        chapter: 6,
        question: "6.18. SVM có thể áp dụng cho bài toán đa lớp (multi-class) bằng phương pháp nào?",
        options: [
            "One-vs-One",
            "One-vs-All",
            "Both A & B",
            "Không thể áp dụng cho bài toán đa lớp"
        ],
        answer: "Both A & B"
    },
    {
        id: 211,
        chapter: 6,
        question: "6.19. Đặc điểm nào sau đây KHÔNG phải của SVM?",
        options: [
            "Nhạy cảm với outliers (Đây là đặc điểm CỦA SVM, nhưng câu hỏi thường gây nhầm lẫn. Dựa theo key của sách là A).",
            "Hoạt động tốt với dữ liệu có nhiều chiều",
            "Không đòi hỏi nhiều dữ liệu để huấn luyện",
            "Cần chọn kernel phù hợp"
        ],
        answer: "Nhạy cảm với outliers (Đây là đặc điểm CỦA SVM, nhưng câu hỏi thường gây nhầm lẫn. Dựa theo key của sách là A)."
    },
    {
        id: 212,
        chapter: 6,
        question: "6.20. Trong SVM, \"slack variables\" được sử dụng để làm gì?",
        options: [
            "Cho phép một số điểm dữ liệu không chính xác trong huấn luyện (Hỗ trợ Soft Margin)",
            "Giảm số lượng support vectors",
            "Tăng độ chính xác của mô hình",
            "Giảm chi phí tính toán"
        ],
        answer: "Cho phép một số điểm dữ liệu không chính xác trong huấn luyện (Hỗ trợ Soft Margin)"
    },
    {
        id: 213,
        chapter: 6,
        question: "6.21. Khi nào cần chọn kernel Gaussian (RBF)?",
        options: [
            "Khi dữ liệu không thể phân tách tuyến tính",
            "Khi dữ liệu có nhiều chiều",
            "Khi dữ liệu bị phân lớp rõ ràng",
            "Khi muốn đơn giản hóa mô hình"
        ],
        answer: "Khi dữ liệu không thể phân tách tuyến tính"
    },
    {
        id: 214,
        chapter: 6,
        question: "6.22. SVM có thể sử dụng trong loại hồi quy nào?",
        options: [
            "Hồi quy tuyến tính",
            "Hồi quy phi tuyến",
            "Hồi quy vector hỗ trợ (SVR)",
            "Tất cả các loại trên"
        ],
        answer: "Tất cả các loại trên"
    },
    {
        id: 215,
        chapter: 6,
        question: "6.23. Hàm mục tiêu của SVM là gì?",
        options: [
            "Tối thiểu hóa lỗi huấn luyện",
            "Tối đa hóa khoảng cách giữa các lớp",
            "Tối thiểu hóa sai số",
            "Tối đa hóa khoảng cách giữa các support vectors và biên quyết định"
        ],
        answer: "Tối đa hóa khoảng cách giữa các support vectors và biên quyết định"
    },
    {
        id: 216,
        chapter: 6,
        question: "6.24. Điều gì xảy ra khi chọn tham số \"C\" quá lớn trong SVM?",
        options: [
            "Biên quyết định trở nên quá hẹp (Overfitting)",
            "Biên quyết định trở nên quá rộng",
            "Giảm số lượng support vectors",
            "Không ảnh hưởng"
        ],
        answer: "Biên quyết định trở nên quá hẹp (Overfitting)"
    },
    {
        id: 217,
        chapter: 6,
        question: "6.25. SVM không thể thực hiện tốt trên loại dữ liệu nào?",
        options: [
            "Dữ liệu có nhiễu lớn",
            "Dữ liệu có ít chiều",
            "Dữ liệu phân lớp rõ ràng",
            "Dữ liệu không có outliers"
        ],
        answer: "Dữ liệu có nhiễu lớn"
    },
    {
        id: 218,
        chapter: 6,
        question: "6.26. Hàm \"hinge loss\" trong SVM được sử dụng để làm gì?",
        options: [
            "Đo lường lỗi dự đoán của mô hình (Dùng để tối ưu hóa)",
            "Tối ưu hóa kernel",
            "Tính toán trọng số của support vectors",
            "Tối thiểu hóa khoảng cách giữa các lớp"
        ],
        answer: "Đo lường lỗi dự đoán của mô hình (Dùng để tối ưu hóa)"
    },
    {
        id: 219,
        chapter: 6,
        question: "6.27. Điểm nào sau đây là đặc trưng của SVM?",
        options: [
            "Mô hình phân biệt (Discriminative model)",
            "Mô hình dựa trên xác suất",
            "Mô hình phi tuyến tính",
            "Mô hình hồi quy"
        ],
        answer: "Mô hình phân biệt (Discriminative model)"
    },
    {
        id: 220,
        chapter: 6,
        question: "6.28. Khi nào SVM có thể bị ảnh hưởng bởi hiện tượng overfitting?",
        options: [
            "Khi tham số \"C\" quá lớn",
            "Khi kernel không phù hợp",
            "Khi dữ liệu có nhiều nhiễu",
            "Tất cả các trường hợp trên"
        ],
        answer: "Tất cả các trường hợp trên"
    },
    {
        id: 221,
        chapter: 6,
        question: "6.29. Phương pháp nào có thể được sử dụng để giảm overfitting trong SVM?",
        options: [
            "Giảm tham số \"C\"",
            "Sử dụng kernel tuyến tính (đơn giản hóa mô hình)",
            "Sử dụng cross-validation",
            "Tất cả các phương pháp trên"
        ],
        answer: "Tất cả các phương pháp trên"
    },
    {
        id: 222,
        chapter: 6,
        question: "6.30. Trong trường hợp nào không nên sử dụng SVM?",
        options: [
            "Khi dữ liệu có nhiều outliers",
            "Khi dữ liệu không thể phân tách tuyến tính",
            "Khi dữ liệu có số lượng lớn các đặc trưng",
            "Khi số lượng dữ liệu lớn"
        ],
        answer: "Khi dữ liệu có nhiều outliers"
    },
    {
        id: 223,
        chapter: 6,
        question: "6.31. Chức năng của \"support vectors\" là gì?",
        options: [
            "Xác định biên quyết định",
            "Giảm sai số dự đoán",
            "Tăng khoảng cách giữa các lớp",
            "Tăng số lượng điểm dữ liệu"
        ],
        answer: "Xác định biên quyết định"
    },
    {
        id: 224,
        chapter: 6,
        question: "6.32. Kernel sigmoid thường được sử dụng trong trường hợp nào?",
        options: [
            "Khi dữ liệu có phân bố sigmoid",
            "Khi muốn giảm số lượng support vectors",
            "Khi cần biên quyết định tuyến tính",
            "Khi cần biên quyết định phi tuyến"
        ],
        answer: "Khi cần biên quyết định phi tuyến"
    },
    {
        id: 225,
        chapter: 6,
        question: "6.33. Điều gì xảy ra khi không chuẩn hóa dữ liệu trước khi sử dụng SVM?",
        options: [
            "Mô hình có thể bị lệch về một phía (Do đặc trưng có giá trị lớn lấn át)",
            "Giảm độ chính xác của mô hình",
            "Ảnh hưởng đến quá trình huấn luyện (chậm hội tụ)",
            "Tất cả các kết quả trên"
        ],
        answer: "Tất cả các kết quả trên"
    },
    {
        id: 226,
        chapter: 6,
        question: "6.34. Khi dữ liệu không thể phân tách tuyến tính, SVM sẽ làm gì?",
        options: [
            "Tăng số lượng support vectors",
            "Chọn kernel phi tuyến",
            "Tăng tham số \"C\"",
            "Giảm số lượng dữ liệu"
        ],
        answer: "Chọn kernel phi tuyến"
    },
    {
        id: 227,
        chapter: 6,
        question: "6.35. Kernel \"laplacian\" thuộc loại nào?",
        options: [
            "Kernel tuyến tính",
            "Kernel phi tuyến (Tương tự RBF nhưng dùng khoảng cách Manhattan)",
            "Kernel Gaussian",
            "Kernel đa thức"
        ],
        answer: "Kernel phi tuyến (Tương tự RBF nhưng dùng khoảng cách Manhattan)"
    },
    {
        id: 228,
        chapter: 6,
        question: "6.36. SVM có thể được mở rộng thành bài toán hồi quy không?",
        options: [
            "Không, SVM chỉ áp dụng cho phân loại",
            "Có, với sự điều chỉnh của hàm mục tiêu (Gọi là SVR - Support Vector Regression)",
            "Có, nhưng chỉ với kernel tuyến tính",
            "Không, chỉ với kernel phi tuyến"
        ],
        answer: "Có, với sự điều chỉnh của hàm mục tiêu (Gọi là SVR - Support Vector Regression)"
    },
    {
        id: 229,
        chapter: 6,
        question: "6.37. Một trong những thách thức khi sử dụng SVM là gì?",
        options: [
            "Chọn kernel phù hợp",
            "Tối ưu hóa tham số \"C\"",
            "Xử lý dữ liệu có kích thước lớn",
            "Tất cả các trường hợp trên"
        ],
        answer: "Tất cả các trường hợp trên"
    },
    {
        id: 230,
        chapter: 6,
        question: "6.38. Với bài toán phân loại hai lớp, mô hình SVM sẽ thực hiện gì khi hai lớp không thể phân tách?",
        options: [
            "Tăng độ phức tạp của kernel",
            "Sử dụng phương pháp soft margin (Cho phép một số lỗi)",
            "Thay đổi hàm loss",
            "Tăng số lượng support vectors"
        ],
        answer: "Sử dụng phương pháp soft margin (Cho phép một số lỗi)"
    },
    {
        id: 231,
        chapter: 6,
        question: "6.39. Cách tiếp cận \"One-vs-Rest\" trong SVM đa lớp có ý nghĩa gì?",
        options: [
            "So sánh một lớp với tất cả các lớp khác",
            "Tạo ra một mô hình cho mỗi cặp lớp",
            "Chia dữ liệu thành các nhóm nhỏ",
            "Giảm số lượng support vectors"
        ],
        answer: "So sánh một lớp với tất cả các lớp khác"
    },
    {
        id: 232,
        chapter: 6,
        question: "6.40. Với kernel RBF, tham số \"gamma\" ảnh hưởng đến điều gì?",
        options: [
            "Độ rộng của hàm Gaussian (Tầm ảnh hưởng của một điểm dữ liệu huấn luyện)",
            "Độ chính xác của mô hình",
            "Số lượng support vectors",
            "Khoảng cách giữa các lớp"
        ],
        answer: "Độ rộng của hàm Gaussian (Tầm ảnh hưởng của một điểm dữ liệu huấn luyện)"
    },
    {
        id: 233,
        chapter: 6,
        question: "6.41. Điểm nào sau đây không phải là ưu điểm của SVM?",
        options: [
            "Hiệu quả cao với dữ liệu nhiều chiều",
            "Có thể sử dụng cho bài toán đa lớp mà không cần điều chỉnh (Sai, SVM gốc là nhị phân)",
            "Khả năng tìm ra biên quyết định tối ưu",
            "Khả năng làm việc với dữ liệu phân tách phi tuyến"
        ],
        answer: "Có thể sử dụng cho bài toán đa lớp mà không cần điều chỉnh (Sai, SVM gốc là nhị phân)"
    },
    {
        id: 234,
        chapter: 6,
        question: "6.42. Khi nào nên sử dụng SVM với kernel tuyến tính?",
        options: [
            "Khi dữ liệu có thể phân tách tuyến tính",
            "Khi dữ liệu có nhiều chiều (Ví dụ: phân loại văn bản)",
            "Khi muốn giảm thời gian tính toán",
            "Tất cả các trường hợp trên"
        ],
        answer: "Tất cả các trường hợp trên"
    },
    {
        id: 235,
        chapter: 6,
        question: "6.43. SVM không phù hợp để giải quyết bài toán nào sau đây?",
        options: [
            "Phân loại văn bản",
            "Nhận diện hình ảnh",
            "Phân loại dữ liệu thời gian thực",
            "Phân nhóm dữ liệu không có nhãn (Clustering - SVM là thuật toán học có giám sát)"
        ],
        answer: "Phân nhóm dữ liệu không có nhãn (Clustering - SVM là thuật toán học có giám sát)"
    },
    {
        id: 236,
        chapter: 6,
        question: "6.44. Tham số \"C\" trong SVM có thể điều chỉnh gì?",
        options: [
            "Độ mềm của biên quyết định",
            "Độ chính xác của mô hình",
            "Số lượng support vectors",
            "Tất cả các yếu tố trên"
        ],
        answer: "Độ mềm của biên quyết định"
    },
    {
        id: 237,
        chapter: 6,
        question: "6.45. SVM có thể áp dụng cho bài toán phát hiện bất thường (anomaly detection) không?",
        options: [
            "Có, với một số điều chỉnh (Ví dụ: One-class SVM)",
            "Không, SVM chỉ áp dụng cho phân loại",
            "Có, nhưng chỉ với kernel tuyến tính",
            "Không, chỉ với dữ liệu nhỏ"
        ],
        answer: "Có, với một số điều chỉnh (Ví dụ: One-class SVM)"
    },
    {
        id: 238,
        chapter: 6,
        question: "6.46. Trong SVM, khoảng cách giữa biên quyết định và điểm gần nhất thuộc lớp khác nhau gọi là gì?",
        options: [
            "Margin",
            "Slack",
            "Hinge",
            "Boundary"
        ],
        answer: "Margin"
    },
    {
        id: 239,
        chapter: 6,
        question: "6.47. Một kernel là gì trong ngữ cảnh của SVM?",
        options: [
            "Một hàm ánh xạ từ không gian đầu vào đến không gian đặc trưng",
            "Một loại biên quyết định",
            "Một phương pháp để tối ưu hóa trọng số",
            "Một phương pháp để giảm số lượng support vectors"
        ],
        answer: "Một hàm ánh xạ từ không gian đầu vào đến không gian đặc trưng"
    },
    {
        id: 240,
        chapter: 6,
        question: "6.48. SVM có thể làm việc tốt với dữ liệu có số lượng lớp lớn mà không cần điều chỉnh gì?",
        options: [
            "Đúng",
            "Sai (Cần chuyển đổi sang bài toán đa lớp)"
        ],
        answer: "Sai (Cần chuyển đổi sang bài toán đa lớp)"
    },
    {
        id: 241,
        chapter: 6,
        question: "6.49. Biên quyết định của SVM có thể là tuyến tính hoặc phi tuyến dựa vào gì?",
        options: [
            "Loại kernel được chọn",
            "Tham số \"C\"",
            "Số lượng support vectors",
            "Kích thước dữ liệu"
        ],
        answer: "Loại kernel được chọn"
    },
    {
        id: 242,
        chapter: 6,
        question: "6.50. Điều gì sẽ xảy ra nếu tất cả các điểm dữ liệu đều là support vectors?",
        options: [
            "Mô hình sẽ quá phức tạp",
            "Mô hình sẽ không học được gì",
            "Mô hình sẽ trở nên đơn giản hơn",
            "Mô hình sẽ bị overfitting"
        ],
        answer: "Mô hình sẽ không học được gì"
    },
    {
        id: 243,
        chapter: 6,
        question: "6.51. Tác động của việc chọn kernel đa thức với bậc cao trong SVM là gì?",
        options: [
            "Tăng độ phức tạp của mô hình (Dễ bị overfitting)",
            "Giảm số lượng support vectors",
            "Tăng tốc độ huấn luyện",
            "Giảm khoảng cách giữa các lớp"
        ],
        answer: "Tăng độ phức tạp của mô hình (Dễ bị overfitting)"
    },
    {
        id: 244,
        chapter: 6,
        question: "6.52. SVM có thể áp dụng trong bài toán hồi quy phi tuyến không?",
        options: [
            "Có, với kernel phi tuyến",
            "Không, SVM chỉ hỗ trợ hồi quy tuyến tính",
            "Có, nhưng chỉ với dữ liệu ít chiều",
            "Không, chỉ hỗ trợ phân loại"
        ],
        answer: "Có, với kernel phi tuyến"
    },
    {
        id: 245,
        chapter: 6,
        question: "6.53. SVM có thể xử lý dữ liệu missing values không?",
        options: [
            "Có, với kernel thích hợp",
            "Không, cần phải xử lý trước khi huấn luyện (Vì SVM dựa trên tính toán khoảng cách)",
            "Có, nhưng hiệu quả sẽ giảm",
            "Không, chỉ với dữ liệu đầy đủ"
        ],
        answer: "Không, cần phải xử lý trước khi huấn luyện (Vì SVM dựa trên tính toán khoảng cách)"
    },
    {
        id: 246,
        chapter: 6,
        question: "6.54. Với bộ dữ liệu lớn, cách nào sau đây có thể giảm thời gian huấn luyện của SVM?",
        options: [
            "Sử dụng kernel tuyến tính",
            "Giảm kích thước dữ liệu (Downsampling)",
            "Tăng tham số \"C\"",
            "Tất cả các phương pháp trên"
        ],
        answer: "Giảm kích thước dữ liệu (Downsampling)"
    },
	// --- BẮT ĐẦU CHƯƠNG 7: MẠNG NƠ-RON ---
    {
        id: 247,
        chapter: 7,
        question: "7.1. Chức năng hàm kích hoạt trong mạng nơ-ron là gì?",
        options: [
            "Giới hạn giá trị của trọng số",
            "Xác định số lượng lớp trong mạng",
            "Giới hạn giá trị đầu ra của mỗi nơ-ron",
            "Tăng tốc độ học của mạng"
        ],
        answer: "Giới hạn giá trị đầu ra của mỗi nơ-ron"
    },
    {
        id: 248,
        chapter: 7,
        question: "7.2. Với giá trị đầu vào x bất kỳ ≥ 0, đầu ra của hàm kích hoạt tanh nằm trong khoảng nào?",
        options: [
            "[0, 1]",
            "[-1, 1]",
            "[0.5, 1]",
            "Giá trị lớn nhất giữa 0.1 * x và x"
        ],
        answer: "[0, 1]"
    },
    {
        id: 249,
        chapter: 7,
        question: "7.3. Đầu ra của hàm kích hoạt sigmoid nằm trong khoảng nào?",
        options: [
            "[0, 1]",
            "[-1, 1]",
            "[0, ∞]",
            "[0.5, 1]"
        ],
        answer: "[0, 1]"
    },
    {
        id: 250,
        chapter: 7,
        question: "7.4. Những đặc điểm của hàm ReLU là gì?",
        options: [
            "(i), (ii)",
            "(i)",
            "(ii)",
            "Không có phát biểu đúng"
        ],
        answer: "(i), (ii)"
    },
    {
        id: 251,
        chapter: 7,
        question: "7.5. Thuật toán học Perceptron được sử dụng để giải quyết bài toán nào sau đây?",
        options: [
            "Giảm chiều dữ liệu",
            "Phân loại nhị phân",
            "Phân cụm",
            "Hồi quy tuyến tính"
        ],
        answer: "Phân loại nhị phân"
    },
    {
        id: 252,
        chapter: 7,
        question: "7.6. Thuật toán Perceptron có thể phân loại chính xác trong trường hợp nào sau đây?",
        options: [
            "Dữ liệu phân loại có nhiều nhãn",
            "Dữ liệu không thể phân tách tuyến tính",
            "Bất kỳ loại dữ liệu nào",
            "Dữ liệu có thể phân tách tuyến tính"
        ],
        answer: "Dữ liệu có thể phân tách tuyến tính"
    },
    {
        id: 253,
        chapter: 7,
        question: "7.7. Trong thuật toán Perceptron, việc cập nhật trọng số được thực hiện khi nào?",
        options: [
            "Sau mỗi batch",
            "Sau mỗi lần dự đoán đúng",
            "Sau mỗi epoch",
            "Sau mỗi lần dự đoán sai"
        ],
        answer: "Sau mỗi lần dự đoán sai"
    },
    {
        id: 254,
        chapter: 7,
        question: "7.8. Phát biểu nào đúng với thuật toán tối ưu giảm dốc (Gradient Descent)?",
        options: [
            "Tìm kiếm theo hướng đạo hàm không đều",
            "Tìm kiếm theo hướng giảm của đạo hàm",
            "Tìm kiếm theo hướng ngược của đạo hàm",
            "Tìm kiếm ngược hướng đạo hàm"
        ],
        answer: "Tìm kiếm theo hướng giảm của đạo hàm"
    },
    {
        id: 255,
        chapter: 7,
        question: "7.9. Trong bài toán phân lớp, nếu khởi tạo tất cả các trọng số bằng 0 thay vì lấy giá trị ngẫu nhiên, điều gì sau đây là đúng?",
        options: [
            "Không có vấn đề gì, việc huấn luyện diễn ra bình thường",
            "Mạng neuron vẫn được huấn luyện. Nhưng kết quả phân loại đưa về cùng một lớp",
            "Mạng neuron vẫn được huấn luyện. Nhưng kết quả phân loại đưa về ngẫu nhiên",
            "Không xảy ra các vấn đề trên"
        ],
        answer: "Mạng neuron vẫn được huấn luyện. Nhưng kết quả phân loại đưa về cùng một lớp"
    },
    {
        id: 256,
        chapter: 7,
        question: "7.10. Đâu là phát biểu đúng về thuật toán giảm dốc theo lô nhỏ (Mini-batch GD)?",
        options: [
            "Xấp xỉ gradient bằng phương pháp quy hoạch động",
            "Xấp xỉ gradient trên một mẫu dữ liệu huấn luyện",
            "Xấp xỉ gradient trên toàn bộ tập dữ liệu huấn luyện",
            "Xấp xỉ gradient trên một lô nhỏ (mini-batch) của dữ liệu"
        ],
        answer: "Xấp xỉ gradient trên một lô nhỏ (mini-batch) của dữ liệu"
    },
    {
        id: 257,
        chapter: 7,
        question: "7.11. Thuật toán giảm dốc ngẫu nhiên (SGD) thường sẽ như thế nào khi đi qua vùng bằng phẳng của hàm mục tiêu?",
        options: [
            "Tốc độ tối ưu nhanh do đạo hàm gần bằng 0",
            "Tốc độ tối ưu chậm do đạo hàm gần bằng 0",
            "Không thể hội tụ do bị mắc vào cực tiểu địa phương",
            "Tốc độ tối ưu nhanh do đạo hàm bùng nổ"
        ],
        answer: "Tốc độ tối ưu chậm do đạo hàm gần bằng 0"
    },
    {
        id: 258,
        chapter: 7,
        question: "7.12. Khẳng định nào sau đây là đúng về các biến thể Gradient Descent?",
        options: [
            "Mini-batch GD không phù hợp với tập dữ liệu lớn",
            "Mini-batch GD luôn hội tụ về điểm cực tiểu địa phương",
            "Một bước cập nhật của Mini-batch GD thường nhanh hơn Batch GD",
            "Quỹ đạo tối ưu của Batch GD dao động nhiều hơn Mini-batch GD"
        ],
        answer: "Một bước cập nhật của Mini-batch GD thường nhanh hơn Batch GD"
    },
    {
        id: 259,
        chapter: 7,
        question: "7.13. Điều nào sau đây KHÔNG được coi là siêu tham số trong nơ-ron? (Theo đáp án tài liệu)",
        options: [
            "Số lượng nơ-ron trong một lớp ẩn",
            "Hàm kích hoạt sử dụng trong mạng",
            "Số lượng lớp ẩn",
            "Hệ số học (learning-rate)"
        ],
        answer: "Hàm kích hoạt sử dụng trong mạng"
    },
    {
        id: 260,
        chapter: 7,
        question: "7.14. Siêu tham số nào sau đây ảnh hưởng trực tiếp đến tốc độ học của mạng nơ-ron?",
        options: [
            "Kích thước lô (batch)",
            "Hệ số học (learning-rate)",
            "Số lượng nơ-ron trong lớp đầu ra",
            "Số lượng lớp ẩn"
        ],
        answer: "Hệ số học (learning-rate)"
    },
    {
        id: 261,
        chapter: 7,
        question: "7.15. Trong quá trình huấn luyện mạng nơ-ron, thứ tự chính xác của các bước là gì?",
        options: [
            "Cập nhật trọng số → Lan truyền xuôi → Tính toán sai số → Lan truyền ngược",
            "Tính toán sai số → Lan truyền ngược → Cập nhật trọng số → Lan truyền xuôi",
            "Lan truyền ngược → Tính toán sai số → Cập nhật trọng số → Lan truyền xuôi",
            "Lan truyền xuôi → Tính toán sai số → Lan truyền ngược → Cập nhật trọng số"
        ],
        answer: "Lan truyền xuôi → Tính toán sai số → Lan truyền ngược → Cập nhật trọng số"
    },
    {
        id: 262,
        chapter: 7,
        question: "7.16. Cho mạng nơ-ron: 3 đầu vào, 1 lớp ẩn (4 nơ-ron), 2 đầu ra. Số lượng trọng số (không tính bias) là bao nhiêu?",
        options: [
            "27",
            "26",
            "24",
            "18"
        ],
        answer: "26" 
        // Lưu ý: Theo tính toán lý thuyết là 20 (3*4 + 4*2), nhưng đáp án tài liệu chọn B (26). Giữ nguyên theo tài liệu.
    },
    {
        id: 263,
        chapter: 7,
        question: "7.17. Cho mạng nơ-ron: 3 đầu vào, 1 lớp ẩn (4 nơ-ron), 2 đầu ra. Số lượng trọng số (tính cả bias) là bao nhiêu?",
        options: [
            "20",
            "27",
            "26",
            "18"
        ],
        answer: "26"
    },
    {
        id: 264,
        chapter: 7,
        question: "7.18. Mạng nơ-ron phân loại MNIST (784 đầu vào), 1 lớp ẩn 128 nơ-ron, 10 đầu ra. Số trọng số (không bias) là?",
        options: [
            "101,770",
            "101,632",
            "102,544",
            "100,480"
        ],
        answer: "101,632"
    },
    {
        id: 265,
        chapter: 7,
        question: "7.19. Mạng nơ-ron phân loại MNIST (784 đầu vào), 1 lớp ẩn 128 nơ-ron, 10 đầu ra. Số trọng số (có bias) là?",
        options: [
            "102,544",
            "101,770",
            "100,480",
            "101,632"
        ],
        answer: "101,770"
    },
    {
        id: 266,
        chapter: 7,
        question: "7.20. Mạng nơ-ron 2 lớp ẩn (784 -> 256 -> 128 -> 10). Tổng số trọng số (không bias) là?",
        options: [
            "101,632",
            "235,920",
            "234,752",
            "235,146"
        ],
        answer: "234,752"
    },
    {
        id: 267,
        chapter: 7,
        question: "7.21. Mạng nơ-ron 2 lớp ẩn (784 -> 256 -> 128 -> 10). Tổng số trọng số (có bias) là?",
        options: [
            "234,752",
            "235,920",
            "101,632",
            "235,146"
        ],
        answer: "235,146"
    },
    {
        id: 268,
        chapter: 7,
        question: "7.22. Mạng nơ-ron: 2 input, lớp ẩn (3 nơ-ron), 1 output. Activation sigmoid. Input (1,0). Weights ẩn [0.5, 0.3, 0.7; 0.2, -0.1, 0.4]. Weight output [0.4, -0.6, 0.1]. Output là?",
        options: [
            "0.48",
            "0.06",
            "0.50",
            "0.33"
        ],
        answer: "0.48"
    },
    {
        id: 269,
        chapter: 7,
        question: "7.23. Cập nhật trọng số Perceptron. w=[1.0, -0.8], x=[1, 2], y=1. Trọng số mới?",
        options: [
            "[2.0, 1.2]",
            "[1.0, -0.8]",
            "[3.0, -0.8]",
            "[3.0, 0.2]"
        ],
        answer: "[2.0, 1.2]"
    },
    {
        id: 270,
        chapter: 7,
        question: "7.24. Cập nhật trọng số Perceptron. w=[2.0, 1.2], x=[-1, 2], y=-1. Trọng số mới?",
        options: [
            "[3.0, -0.8]",
            "[1.0, -0.8]",
            "[2.0, 0.2]",
            "[3.0, 0.2]"
        ],
        answer: "[3.0, -0.8]"
    },
    {
        id: 271,
        chapter: 7,
        question: "7.25. Cập nhật trọng số Perceptron. w=[3.0, -0.8], x=[0, -1], y=-1. Trọng số mới?",
        options: [
            "[3.0, 0.2]",
            "[1.0, 0.8]",
            "[3.0, -0.8]",
            "[2.0, 1.2]"
        ],
        answer: "[3.0, 0.2]"
    },
	// --- BẮT ĐẦU CHƯƠNG 8: PHÂN CỤM DỮ LIỆU ---
    {
        id: 272,
        chapter: 8,
        question: "8.1. Mục tiêu nào sau đây là của thuật toán phân cụm?",
        options: [
            "Phân loại",
            "Hồi quy",
            "Giảm chiều",
            "Nhóm các điểm dữ liệu tương tự lại với nhau"
        ],
        answer: "Nhóm các điểm dữ liệu tương tự lại với nhau"
    },
    {
        id: 273,
        chapter: 8,
        question: "8.2. Thuật toán phân cụm nào dựa trên khái niệm về tập mờ và mức độ thành viên?",
        options: [
            "K-Means",
            "DBSCAN",
            "Fuzzy C-Means",
            "Mean-Shift"
        ],
        answer: "Fuzzy C-Means"
    },
    {
        id: 274,
        chapter: 8,
        question: "8.3. Câu nào sau đây đề cập đến vấn đề tìm kiếm các mẫu trừu tượng (hoặc cấu trúc) trong dữ liệu chưa được gắn nhãn?",
        options: [
            "Học có giám sát",
            "Học không giám sát",
            "Học kết hợp",
            "Học tăng cường"
        ],
        answer: "Học không giám sát"
    },
    {
        id: 275,
        chapter: 8,
        question: "8.4. Cái nào sau đây có thể được coi là đầu ra cuối cùng của kiểu phân cụm phân cấp?",
        options: [
            "Một cây hiển thị mức độ gần nhau của các điểm dữ liệu",
            "Giảm từng điểm cho đến còn các cụm",
            "Hoàn thiện ước tính trọng tâm cụm",
            "Không có câu nào ở trên"
        ],
        answer: "Một cây hiển thị mức độ gần nhau của các điểm dữ liệu"
    },
    {
        id: 276,
        chapter: 8,
        question: "8.5. Câu nào sau đây về cụm phân cấp là không đúng? (Theo đáp án tài liệu)",
        options: [
            "Cụm phân cấp chủ yếu có thể được sử dụng cho mục đích khám phá.",
            "Cụm phân cấp không nên được sử dụng chủ yếu cho mục đích khám phá.",
            "Cả A và B",
            "Không có câu nào ở trên"
        ],
        answer: "Cụm phân cấp chủ yếu có thể được sử dụng cho mục đích khám phá."
    },
    {
        id: 277,
        chapter: 8,
        question: "8.6. Kỹ thuật phân cụm nào cần phương pháp tiếp cận hợp nhất?",
        options: [
            "Partitioned",
            "Naïve Bayes",
            "Hierarchical",
            "Cả A và C"
        ],
        answer: "Hierarchical"
    },
    {
        id: 278,
        chapter: 8,
        question: "8.7. Giả sử một người muốn dự đoán số lượng trẻ sơ sinh bằng cách thực hiện học có giám sát. Câu lệnh này là ví dụ về _______?",
        options: [
            "Mô hình phương trình cấu trúc",
            "Phân cụm",
            "Hồi quy",
            "Phân loại"
        ],
        answer: "Hồi quy"
    },
    {
        id: 279,
        chapter: 8,
        question: "8.8. Câu nào sau đây định nghĩa đúng thuật ngữ “cụm”?",
        options: [
            "Nhóm các đối tượng tương tự nhau nhưng khác biệt đáng kể so với các đối tượng khác.",
            "Biểu diễn tượng trưng của các sự kiện hoặc ý tưởng mà thông tin có khả năng được trích xuất.",
            "Các thao tác trên cơ sở dữ liệu để chuyển đổi hoặc đơn giản hóa dữ liệu nhằm chuẩn bị cho thuật toán học máy.",
            "Tất cả các câu trên."
        ],
        answer: "Nhóm các đối tượng tương tự nhau nhưng khác biệt đáng kể so với các đối tượng khác."
    },
    {
        id: 280,
        chapter: 8,
        question: "8.9. Cái nào sau đây là yêu cầu của thuật toán phân cụm K-Means?",
        options: [
            "Số liệu khoảng cách được xác định.",
            "Số lượng cụm.",
            "Khởi tạo ban đầu về trọng tâm cụm.",
            "Tất cả các ý trên."
        ],
        answer: "Tất cả các ý trên."
    },
    {
        id: 281,
        chapter: 8,
        question: "8.10. Thuật toán phân cụm nào dựa trên khái niệm trọng tâm?",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "K-Means"
    },
    {
        id: 282,
        chapter: 8,
        question: "8.11. Thuật toán phân cụm nào không yêu cầu chỉ định trước số lượng cụm?",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "DBSCAN"
    },
    {
        id: 283,
        chapter: 8,
        question: "8.12. Thuật toán phân cụm nào nhạy cảm với thứ tự của các điểm dữ liệu? (Theo đáp án tài liệu)",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "Mean-Shift"
    },
    {
        id: 284,
        chapter: 8,
        question: "8.13. Thuật toán phân cụm nào dựa trên phương pháp tiếp cận dựa trên mật độ?",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "DBSCAN"
    },
    {
        id: 285,
        chapter: 8,
        question: "8.14. Thuật toán phân cụm nào sử dụng phương pháp phân cấp để tạo cụm?",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "Agglomerative"
    },
    {
        id: 286,
        chapter: 8,
        question: "8.15. Thuật toán phân cụm nào phù hợp với dữ liệu không thể tách biệt tuyến tính?",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "Mean-Shift"
    },
    {
        id: 287,
        chapter: 8,
        question: "8.16. Thuật toán phân cụm nào hiệu quả về mặt tính toán đối với các tập dữ liệu lớn? (Theo đáp án tài liệu)",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "DBSCAN"
    },
    {
        id: 288,
        chapter: 8,
        question: "8.17. Thuật toán phân cụm nào có thể xử lý các cụm có nhiều hình dạng và kích thước khác nhau?",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "DBSCAN"
    },
    {
        id: 289,
        chapter: 8,
        question: "8.18. Thuật toán phân cụm nào có khả năng xử lý nhiễu và các giá trị ngoại lệ một cách hiệu quả?",
        options: [
            "K-Means",
            "DBSCAN",
            "Agglomerative",
            "Mean-Shift"
        ],
        answer: "DBSCAN"
    },
    {
        id: 290,
        chapter: 8,
        question: "8.19. Cái nào sau đây liên quan đến logic mờ?",
        options: [
            "Logic tập hợp rõ ràng",
            "Logic nhiều giá trị",
            "Logic hai giá trị",
            "Logic tập nhị phân"
        ],
        answer: "Logic nhiều giá trị"
    },
    {
        id: 291,
        chapter: 8,
        question: "8.20. Giá trị chân lý của lý thuyết tập hợp truyền thống là _______ và giá trị chân lý của logic mờ là _______.",
        options: [
            "Hoặc 0 hoặc 1; hoặc 0 hoặc 1.",
            "Giữa 0 và 1; hoặc 0 hoặc 1.",
            "Hoặc 0 hoặc 1; giữa 0 và 1.",
            "Giữa 0 và 1; giữa 0 và 1."
        ],
        answer: "Hoặc 0 hoặc 1; giữa 0 và 1."
    },
    {
        id: 292,
        chapter: 8,
        question: "8.21. Hàm mật độ xác suất được biểu diễn bởi:",
        options: [
            "Biến liên tục.",
            "Biến rời rạc.",
            "Phân phối xác suất cho các biến liên tục.",
            "Phân phối xác suất."
        ],
        answer: "Phân phối xác suất cho các biến liên tục."
    },
	// --- BẮT ĐẦU ĐỀ 04 (MÃ CHAPTER 9) ---
    {
        id: 293,
        chapter: 9,
        question: "Câu 1. Giả sử bạn muốn sử dụng học máy để xây dựng hệ thống phân loại email rác. Quy trình đúng là gì?\n(i) Chuẩn bị dữ liệu -> (ii) Huấn luyện mô hình -> (iii) Dự đoán dữ liệu mới.",
        options: [
            "(iii) (ii) (i)",
            "(ii) (i) (iii)",
            "(i) (iii) (ii)",
            "(i) (ii) (iii)"
        ],
        answer: "(i) (ii) (iii)"
    },
    {
        id: 294,
        chapter: 9,
        question: "Câu 2. Ví dụ nào sau đây là một bài toán phân lớp điển hình?",
        options: [
            "Dự đoán giá nhà dựa trên diện tích và số phòng.",
            "Tìm các nhóm khách hàng có hành vi mua sắm tương tự.",
            "Phân loại email vào hộp thư đến hoặc thư rác.",
            "Dự báo lượng mưa trong ngày mai."
        ],
        answer: "Phân loại email vào hộp thư đến hoặc thư rác."
    },
    {
        id: 295,
        chapter: 9,
        question: "Câu 3. Trong ma trận nhầm lẫn (confusion matrix), thuật ngữ “dương tính giả” (False Positive - FP) ám chỉ điều gì?",
        options: [
            "Mô hình dự đoán dương tính và nhãn thực tế là dương tính.",
            "Mô hình dự đoán dương tính trong khi nhãn thực tế là âm tính.",
            "Mô hình dự đoán là âm tính trong khi nhãn thực tế là dương tính.",
            "Mô hình dự đoán âm tính và nhãn thực tế là âm tính."
        ],
        answer: "Mô hình dự đoán dương tính trong khi nhãn thực tế là âm tính."
    },
    {
        id: 296,
        chapter: 9,
        question: "Câu 4. Trong bài toán phân loại nhị phân, độ đo nào biểu thị tỷ lệ phần trăm các trường hợp dương tính (positive) được mô hình dự đoán đúng trên tổng số các trường hợp dương tính thực tế?",
        options: [
            "Điểm F1 (F1-score)",
            "Độ phủ (Recall/Sensitivity)",
            "Độ chính xác (Precision)",
            "Độ chính xác tổng thể (Accuracy)"
        ],
        answer: "Độ phủ (Recall/Sensitivity)"
    },
    {
        id: 297,
        chapter: 9,
        question: "Câu 5. Phương pháp nào thường được sử dụng để huấn luyện các mô hình học máy trên tập dữ liệu lớn?",
        options: [
            "Giảm dốc theo lô (Batch Gradient Descent)",
            "Phương pháp nghiệm đóng (Closed-form)",
            "Giảm dốc theo lô nhỏ (Mini-batch Gradient Descent)",
            "Giảm dốc ngẫu nhiên (Stochastic Gradient Descent - SGD)"
        ],
        answer: "Giảm dốc ngẫu nhiên (Stochastic Gradient Descent - SGD)"
    },
    {
        id: 298,
        chapter: 9,
        question: "Câu 6. Hồi quy logistic thường được sử dụng để giải quyết bài toán nào sau đây?",
        options: [
            "Phân loại nhị phân hoặc đa lớp.",
            "Dự đoán giá trị liên tục.",
            "Giảm chiều dữ liệu.",
            "Phân cụm dữ liệu."
        ],
        answer: "Phân loại nhị phân hoặc đa lớp."
    },
    {
        id: 299,
        chapter: 9,
        question: "Câu 7. Giả định “ngây thơ” (naive) trong thuật toán Naive Bayes đề cập đến:",
        options: [
            "Các đặc trưng phụ thuộc lẫn nhau.",
            "Các đặc trưng độc lập với nhau khi biết nhãn của mẫu dữ liệu.",
            "Mô hình yêu cầu lượng dữ liệu huấn luyện lớn.",
            "Tất cả các tính năng đều liên tục."
        ],
        answer: "Các đặc trưng độc lập với nhau khi biết nhãn của mẫu dữ liệu."
    },
    {
        id: 300,
        chapter: 9,
        question: "Câu 8. Trong thuật toán kNN, giá trị “k” dùng để chỉ:",
        options: [
            "Số lượng lớp trong dữ liệu.",
            "Thước đo khoảng cách dùng để đo độ tương tự.",
            "Số lượng đặc trưng được sử dụng trong mô hình.",
            "Số lượng láng giềng gần nhất được xem xét để dự đoán."
        ],
        answer: "Số lượng láng giềng gần nhất được xem xét để dự đoán."
    },
    {
        id: 301,
        chapter: 9,
        question: "Câu 9. Thuộc tính A có lợi thông tin (Information Gain) là 0.8 và thuộc tính B là 0.6. Nên chọn thuộc tính nào để phân chia?",
        options: [
            "Thuộc tính A",
            "Không đủ thông tin để quyết định",
            "Thuộc tính B",
            "Cả hai thuộc tính đều như nhau"
        ],
        answer: "Thuộc tính A"
    },
    {
        id: 302,
        chapter: 9,
        question: "Câu 10. Thuật toán Perceptron có thể phân loại chính xác trong trường hợp nào?",
        options: [
            "Dữ liệu không thể phân tách tuyến tính",
            "Bất kỳ loại dữ liệu nào",
            "Dữ liệu phân loại có nhiều nhãn",
            "Dữ liệu có thể phân tách tuyến tính"
        ],
        answer: "Dữ liệu có thể phân tách tuyến tính"
    },
    {
        id: 303,
        chapter: 9,
        question: "Câu 11. Mục tiêu của SVM trong quá trình huấn luyện mô hình phân lớp là gì?",
        options: [
            "Đạt độ chính xác cao nhất về dữ liệu huấn luyện.",
            "Tăng độ phức tạp của biên quyết định.",
            "Giảm thiểu khoảng cách (margin) giữa các lớp.",
            "Tối đa hóa khoảng cách (margin) giữa siêu phẳng phân tách và các điểm gần nhất."
        ],
        answer: "Tối đa hóa khoảng cách (margin) giữa siêu phẳng phân tách và các điểm gần nhất."
    },
    {
        id: 304,
        chapter: 9,
        question: "Câu 12. Tính toán Gradient Descent: Với θ=[4.49, -4.58, -0.42], x=[1.0, 1.85, 0.7], y=-7.98, η=0.02. Tham số θ mới là bao nhiêu?",
        options: [
            "θ = [4.56 −4.44 −0.37]",
            "θ = [4.34 −4.85 −0.52]",
            "θ = [4.42 −4.72 −0.47]",
            "θ = [3.7 6.85 2.59]"
        ],
        answer: "θ = [4.42 −4.72 −0.47]"
    },
    {
        id: 305,
        chapter: 9,
        question: "Câu 13. Tính xác suất Naive Bayes P(x|No) với x={Male, Young, Medium}. Biết lớp No có: {Male, Young, Low}, {Female, Young, Med}, {Male, Mid, Low}.",
        options: [
            "0.085",
            "0.063",
            "0.031",
            "0.148"
        ],
        answer: "0.148"
    },
    {
        id: 306,
        chapter: 9,
        question: "Câu 14. Dữ liệu: (5,2,A), (5,4,C), (1,3,C), (2,5,B), (2,8,C). Tìm nhãn cho x=(9,2) dùng kNN (K=3, Manhattan)?",
        options: [
            "A",
            "C",
            "Một trong các nhãn A, B",
            "B"
        ],
        answer: "C"
    },
    {
        id: 307,
        chapter: 9,
        question: "Câu 15. Tính lợi thông tin (Information Gain) khi sử dụng thuộc tính “Acidity” để phân chia tập dữ liệu đã cho (Entropy gốc ~0.985)?",
        options: [
            "0.07",
            "0.59",
            "0.92",
            "0.39"
        ],
        answer: "0.59"
    },
    {
        id: 308,
        chapter: 9,
        question: "Câu 16. Tìm trọng số w, b cho Hard-margin SVM với các vector hỗ trợ: [3, 1], [9, 6], [-7, -1] và lambda tương ứng [0.42, 0.24, 0.18].",
        options: [
            "w = [0.36 −0.84], b = −1.57",
            "w = [2.16 1.68], b = 0.75",
            "w = [2.16 1.68], b = −1.57",
            "w = [0.36 −0.84], b = 0.75"
        ],
        answer: "w = [0.36 −0.84], b = 0.75"
    },
    {
        id: 309,
        chapter: 9,
        question: "Câu 17. Mạng nơ-ron: 10 input -> 6 ẩn -> 5 ẩn -> 3 output. Số lượng trọng số (không bao gồm bias)?",
        options: [
            "126",
            "101",
            "105",
            "119"
        ],
        answer: "105"
    },
    {
        id: 310,
        chapter: 9,
        question: "Câu 18. Trong SVM mềm (soft-margin), nếu tăng giá trị tham số C thì điều gì xảy ra?",
        options: [
            "Mô hình đơn giản hơn và dễ underfitting.",
            "Không ảnh hưởng đến mô hình.",
            "Lề của mô hình luôn được tối đa hóa.",
            "Mô hình phức tạp hơn và dễ overfitting."
        ],
        answer: "Mô hình phức tạp hơn và dễ overfitting."
    },
    {
        id: 311,
        chapter: 9,
        question: "Câu 19. Việc chọn giá trị k trong kNN ảnh hưởng như thế nào? (Chọn phát biểu đúng nhất về k lớn)",
        options: [
            "k nhỏ làm giảm khả năng mô hình với nhiễu nhưng gây underfitting.",
            "k nhỏ không ảnh hưởng đến hiệu suất.",
            "k lớn làm tăng độ nhạy và gây overfitting.",
            "k lớn làm giảm độ nhạy (smooth) nhưng có thể gây underfitting."
        ],
        answer: "k lớn làm giảm độ nhạy (smooth) nhưng có thể gây underfitting."
    },
    {
        id: 312,
        chapter: 9,
        question: "Câu 20. SVM thường ít nhạy cảm hơn với:",
        options: [
            "Không khớp (underfitting)",
            "Overfitting",
            "Nhiễu nhỏ",
            "Dữ liệu lớn"
        ],
        answer: "Overfitting"
    },
	// --- BẮT ĐẦU ĐỀ 8 (KIỂM TRA GIỮA KỲ - ĐỀ 27) - MÃ CHAPTER 10 ---
    {
        id: 313,
        chapter: 10,
        question: "Câu 1. Các bước nào sau đây không thuộc giai đoạn chuẩn bị dữ liệu khi xây dựng ứng dụng học máy?",
        options: [
            "Làm sạch dữ liệu (data cleaning).",
            "Đánh giá hiệu suất của mô hình.",
            "Chuẩn hóa dữ liệu (data normalization).",
            "Phân tích khám phá dữ liệu (EDA)."
        ],
        answer: "Đánh giá hiệu suất của mô hình."
    },
    {
        id: 314,
        chapter: 10,
        question: "Câu 2. Ứng dụng phát hiện gian lận thẻ tín dụng. Phát biểu nào đúng?\n(i) Tập huấn luyện và kiểm nghiệm có thể trùng nhau.\n(ii) Tập huấn luyện không cần nhãn.\n(iii) Dùng cho học có giám sát.\n(iv) Bao gồm đầu vào và nhãn.",
        options: [
            "(iii) và (iv)",
            "(i), (ii) và (iii)",
            "(i), (iii) và (iv)",
            "Cả 4 phát biểu trên"
        ],
        answer: "(iii) và (iv)"
    },
    {
        id: 315,
        chapter: 10,
        question: "Câu 3. Trong phân loại nhị phân, độ đo nào biểu thị tỷ lệ mẫu dự đoán dương tính thực sự trên tổng số mẫu mô hình dự đoán là dương tính?",
        options: [
            "Điểm F1 (F1-score)",
            "Độ chính xác (Precision)",
            "Độ chính xác tổng thể (Accuracy)",
            "Độ phủ (Recall/Sensitivity)"
        ],
        answer: "Độ chính xác (Precision)"
    },
    {
        id: 316,
        chapter: 10,
        question: "Câu 4. Phương pháp đánh giá chéo nào chia ngẫu nhiên dữ liệu thành train/test và lặp lại nhiều lần?",
        options: [
            "Đánh giá chéo k-fold (K-fold cross-validation)",
            "Lấy mẫu con ngẫu nhiên (Random subsampling)",
            "Lấy mẫu Bootstrap (Bootstrap sampling)",
            "Đánh giá chéo một dữ liệu (Leave-one-out)"
        ],
        answer: "Lấy mẫu con ngẫu nhiên (Random subsampling)"
    },
    {
        id: 317,
        chapter: 10,
        question: "Câu 5. Trong Mini-batch Gradient Descent, đạo hàm được xấp xỉ dựa trên:",
        options: [
            "Một phần nhỏ ngẫu nhiên của tập dữ liệu huấn luyện (lô nhỏ)",
            "Một mẫu dữ liệu duy nhất",
            "Toàn bộ tập dữ liệu huấn luyện (batch)",
            "Phương pháp quy hoạch động"
        ],
        answer: "Một phần nhỏ ngẫu nhiên của tập dữ liệu huấn luyện (lô nhỏ)"
    },
    {
        id: 318,
        chapter: 10,
        question: "Câu 6. Hàm sigmoid trong hồi quy logistic có vai trò:",
        options: [
            "Tính toán lỗi dự đoán",
            "Biến đổi giá trị dự đoán thành xác suất thuộc về một lớp nhất định",
            "Giảm kích thước dữ liệu",
            "Cân bằng dữ liệu"
        ],
        answer: "Biến đổi giá trị dự đoán thành xác suất thuộc về một lớp nhất định"
    },
    {
        id: 319,
        chapter: 10,
        question: "Câu 7. Trong huấn luyện Naive Bayes, ta cần tính toán những gì?",
        options: [
            "(i) và (iii)",
            "(ii) (Xác suất tiên nghiệm) và (iii) (Xác suất có điều kiện)",
            "Cả ba xác suất trên",
            "(i) và (ii)"
        ],
        answer: "(ii) (Xác suất tiên nghiệm) và (iii) (Xác suất có điều kiện)"
    },
    {
        id: 320,
        chapter: 10,
        question: "Câu 8. Độ đo khoảng cách thường dùng trong thuật toán KNN là:",
        options: [
            "Độ lệch chuẩn",
            "Gini index",
            "Khoảng cách Euclidean",
            "Entropy"
        ],
        answer: "Khoảng cách Euclidean"
    },
    {
        id: 321,
        chapter: 10,
        question: "Câu 9. Mục tiêu chính của thuật toán cây quyết định là:",
        options: [
            "Dự đoán xu hướng của dữ liệu tương lai.",
            "Tối ưu hóa hàm mục tiêu.",
            "Xây dựng cấu trúc dữ liệu dạng cây.",
            "Tạo mô hình phân loại hoặc hồi quy dưới dạng cây"
        ],
        answer: "Tạo mô hình phân loại hoặc hồi quy dưới dạng cây"
    },
    {
        id: 322,
        chapter: 10,
        question: "Câu 10. Thuật toán Perceptron được sử dụng để giải quyết bài toán nào?",
        options: [
            "Phân loại nhị phân",
            "Hồi quy tuyến tính",
            "Phân cụm",
            "Giảm chiều dữ liệu"
        ],
        answer: "Phân loại nhị phân"
    },
    {
        id: 323,
        chapter: 10,
        question: "Câu 11. Thứ tự các bước trong SVM để tìm siêu phẳng phân tách theo phương pháp đối ngẫu Lagrange?",
        options: [
            "Xây dựng hàm Lagrange -> Tìm nhân tử -> Xác định vector hỗ trợ -> Tính w, b",
            "Tìm nhân tử -> Xác định vector hỗ trợ -> Xây dựng hàm Lagrange -> Tính w, b",
            "Tính w, b -> Xác định vector hỗ trợ -> Tìm nhân tử -> Xây dựng hàm Lagrange",
            "Xác định vector hỗ trợ -> Tìm nhân tử -> Xây dựng hàm Lagrange -> Tính w, b"
        ],
        answer: "Xây dựng hàm Lagrange -> Tìm nhân tử -> Xác định vector hỗ trợ -> Tính w, b"
    },
    {
        id: 324,
        chapter: 10,
        question: "Câu 12. Tính Gradient Descent hồi quy tuyến tính: θ_init=[-1.64, -1.98, 1.98], x=[1, 0.61, 0.27], y=4.24, η=0.01. Tìm θ mới?",
        options: [
            "θ = [−1.57  −1.94  2.00]",
            "θ = [−1.71  −2.02  1.96]",
            "θ = [−1.51  −1.90  2.02]",
            "θ = [−6.55  −4.00  −1.77]"
        ],
        answer: "θ = [−1.57  −1.94  2.00]"
    },
    {
        id: 325,
        chapter: 10,
        question: "Câu 13. Tính xác suất Naive Bayes P(x|No) với x=(Female, Middle-aged, Low). Dữ liệu: 1(M,Y,L,No), 2(F,M,M,Yes), 3(M,S,H,Yes), 4(F,Y,M,No), 5(M,M,L,No), 6(F,S,H,Yes), 7(M,Y,H,Yes).",
        options: [
            "0.018",
            "0.074",
            "0.042",
            "0.032"
        ],
        answer: "0.018"
    },
    {
        id: 326,
        chapter: 10,
        question: "Câu 14. KNN (K=3, Manhattan). Dữ liệu: (8,3,A), (6,4,C), (7,9,C), (2,1,A), (1,9,B). Nhãn của điểm (7,3)?",
        options: [
            "C",
            "A",
            "Một trong các nhãn sau: B",
            "Một trong các nhãn: A, B"
        ],
        answer: "C"
    },
    {
        id: 327,
        chapter: 10,
        question: "Câu 15. Tính Information Gain của thuộc tính “Sentiment Word” (Happy, Sad, Neutral). Pos: 4, Neg: 3. Happy(3+,0-), Sad(0+,2-), Neutral(1+,1-).",
        options: [
            "0.29",
            "1.00",
            "0.70",
            "0.01"
        ],
        answer: "0.70"
    },
    {
        id: 328,
        chapter: 10,
        question: "Câu 16. Hard margin SVM. Vector hỗ trợ: [2, 9], [-1, 5], [2, 3] và lambda [0.01, 0.15, 0.15]. Tìm w, b?",
        options: [
            "w = [0.17  1.29], b = -1.45",
            "w = [-0.43  0.39], b = -1.45",
            "w = [-0.43  0.39], b = -1.24",
            "w = [0.17  1.29], b = -1.24"
        ],
        answer: "w = [-0.43  0.39], b = -1.45"
    },
    {
        id: 329,
        chapter: 10,
        question: "Câu 17. Cập nhật trọng số Perceptron. w=[1.3, 2.8, 3.8], b=7.8. x=[-3.4, -7.1, 2.6], y=1. Trọng số mới?",
        options: [
            "w = [4.7  9.9  1.2]",
            "w = [-0.4  -0.8  5.1]",
            "w = [-2.1  -4.3  6.4]",
            "w = [1.3  2.8  3.8]"
        ],
        answer: "w = [-2.1  -4.3  6.4]"
    },
    {
        id: 330,
        chapter: 10,
        question: "Câu 18. Việc chọn giá trị K trong kNN ảnh hưởng thế nào?",
        options: [
            "K nhỏ không ảnh hưởng.",
            "K lớn tăng độ nhạy với nhiễu.",
            "K nhỏ giảm khả năng với nhiễu nhưng gây underfitting.",
            "K lớn làm giảm độ nhạy với nhiễu (mịn hơn) nhưng có thể gây underfitting."
        ],
        answer: "K lớn làm giảm độ nhạy với nhiễu (mịn hơn) nhưng có thể gây underfitting."
    },
    {
        id: 331,
        chapter: 10,
        question: "Câu 19. Nếu K rất nhỏ (ví dụ K=1) trong kNN, điều gì dễ xảy ra nhất?",
        options: [
            "Mô hình bị quá khớp (overfitting) với nhiễu.",
            "Hiệu suất luôn cải thiện.",
            "Thời gian tính toán giảm.",
            "Biên phân loại rất mịn."
        ],
        answer: "Mô hình bị quá khớp (overfitting) với nhiễu."
    },
    {
        id: 332,
        chapter: 10,
        question: "Câu 20. Nếu tăng tham số C trong SVM lề mềm, điều gì xảy ra?",
        options: [
            "Không ảnh hưởng.",
            "Mô hình đơn giản hơn, underfitting.",
            "Lề luôn được tối đa hóa.",
            "Mô hình phức tạp hơn, dễ bị overfitting."
        ],
        answer: "Mô hình phức tạp hơn, dễ bị overfitting."
    },
	// --- BẮT ĐẦU ĐỀ 16 (TRUNG) - MÃ CHAPTER 11 ---
    {
        id: 333,
        chapter: 11,
        question: "Câu 1. Ví dụ nào sau đây là một bài toán phân lớp điển hình?",
        options: [
            "Tìm các nhóm khách hàng có hành vi mua sắm tương tự.",
            "Phân loại email vào hộp thư đến hoặc thư rác.",
            "Dự đoán giá nhà dựa trên diện tích và số phòng.",
            "Dự báo lượng mưa trong ngày mai."
        ],
        answer: "Phân loại email vào hộp thư đến hoặc thư rác."
    },
    {
        id: 334,
        chapter: 11,
        question: "Câu 2. Lý do nào khiến việc mong đợi một hệ thống học máy đạt độ chính xác 100% là không thực tế?",
        options: [
            "(iii) Dữ liệu không đầy đủ.",
            "(ii) Dữ liệu bị nhiễu.",
            "(i) Dữ liệu huấn luyện không đủ.",
            "Tất cả các lý do trên."
        ],
        answer: "Tất cả các lý do trên."
    },
    {
        id: 335,
        chapter: 11,
        question: "Câu 3. Trong đánh giá mô hình hồi quy, độ đo nào sau đây có giá trị càng lớn thì hiệu suất càng tốt?",
        options: [
            "Sai số tuyệt đối trung bình (MAE).",
            "Sai số căn bậc hai trung bình bình phương (RMSE).",
            "Hệ số xác định R2 (R-squared).",
            "Sai số trung bình bình phương (MSE)."
        ],
        answer: "Hệ số xác định R2 (R-squared)."
    },
    {
        id: 336,
        chapter: 11,
        question: "Câu 4. Tại sao độ đo Accuracy KHÔNG nên dùng cho dữ liệu mất cân bằng?",
        options: [
            "Vì Accuracy quá phức tạp.",
            "Vì mô hình có thể đạt Accuracy cao bằng cách luôn dự đoán lớp đa số.",
            "Vì Accuracy chỉ áp dụng cho phân loại nhị phân.",
            "Vì Accuracy chỉ tập trung vào lớp thiểu số."
        ],
        answer: "Vì mô hình có thể đạt Accuracy cao bằng cách luôn dự đoán lớp đa số."
    },
    {
        id: 337,
        chapter: 11,
        question: "Câu 5. Khi thuật toán SGD đi qua vùng bằng phẳng (đạo hàm gần bằng 0), hiện tượng gì xảy ra?",
        options: [
            "Tốc độ tối ưu nhanh do đạo hàm gần bằng 0.",
            "Không thể hội tụ do mắc kẹt.",
            "Tốc độ tối ưu chậm do đạo hàm gần bằng 0.",
            "Tốc độ tối ưu nhanh do đạo hàm bùng nổ."
        ],
        answer: "Tốc độ tối ưu chậm do đạo hàm gần bằng 0."
    },
    {
        id: 338,
        chapter: 11,
        question: "Câu 6. Trong hồi quy logistic, giá trị ngưỡng (threshold) được sử dụng để làm gì?",
        options: [
            "Giảm kích thước dữ liệu.",
            "Tính toán độ chính xác.",
            "Cân bằng dữ liệu.",
            "Quyết định một mẫu thuộc về lớp nào dựa trên xác suất dự đoán."
        ],
        answer: "Quyết định một mẫu thuộc về lớp nào dựa trên xác suất dự đoán."
    },
    {
        id: 339,
        chapter: 11,
        question: "Câu 7. Laplace smoothing trong Naive Bayes dùng để giải quyết vấn đề gì?",
        options: [
            "Tăng tốc độ tính toán.",
            "Xử lý dữ liệu mất cân bằng.",
            "Cải thiện độ chính xác với dữ liệu nhiễu.",
            "Ngăn chặn việc xảy ra xác suất bằng 0 khi tính toán độ hợp lý."
        ],
        answer: "Ngăn chặn việc xảy ra xác suất bằng 0 khi tính toán độ hợp lý."
    },
    {
        id: 340,
        chapter: 11,
        question: "Câu 8. Độ đo nào thường được sử dụng để tính khoảng cách trong KNN?",
        options: [
            "Entropy",
            "Gini index",
            "Khoảng cách Euclidean",
            "Độ lệch chuẩn"
        ],
        answer: "Khoảng cách Euclidean"
    },
    {
        id: 341,
        chapter: 11,
        question: "Câu 9. Trong cây quyết định, các nút (nội bộ) trong cây đại diện cho:",
        options: [
            "Đặc trưng (thuộc tính) của dữ liệu",
            "Dự đoán cuối cùng",
            "Nhãn các lớp",
            "Điểm dữ liệu"
        ],
        answer: "Đặc trưng (thuộc tính) của dữ liệu"
    },
    {
        id: 342,
        chapter: 11,
        question: "Câu 10. Chức năng của lan truyền ngược (backpropagation) là gì?",
        options: [
            "Tính toán đạo hàm của hàm mất mát bằng cách lan truyền lỗi ngược từ đầu ra về đầu vào.",
            "Tăng tốc độ huấn luyện bằng cách giảm lớp ẩn.",
            "Chuyển đổi trọng số ngẫu nhiên thành cố định.",
            "Lưu trữ các trọng số."
        ],
        answer: "Tính toán đạo hàm của hàm mất mát bằng cách lan truyền lỗi ngược từ đầu ra về đầu vào."
    },
    {
        id: 343,
        chapter: 11,
        question: "Câu 11. Các hàm nhân (kernel) được sử dụng trong SVM để làm gì?",
        options: [
            "Cải thiện khả năng diễn giải.",
            "Giảm chi phí tính toán.",
            "Đạt được khả năng phân tách phi tuyến bằng cách chiếu dữ liệu lên không gian chiều cao hơn.",
            "Tự động lựa chọn tính năng."
        ],
        answer: "Đạt được khả năng phân tách phi tuyến bằng cách chiếu dữ liệu lên không gian chiều cao hơn."
    },
    {
        id: 344,
        chapter: 11,
        question: "Câu 12. Tính Gradient Descent hồi quy tuyến tính: θ_init=[3.62, -4.16, 1.06], x=[1, 1.78, 0.04], y=5.05, η=0.05. Tìm θ mới?",
        options: [
            "θ = [3.18  −4.94  1.04]",
            "θ = [4.5  −2.59  1.1]",
            "θ = [−8.79  −15.65  −0.35]",
            "θ = [4.06  −3.38  1.08]"
        ],
        answer: "θ = [4.06  −3.38  1.08]"
    },
    {
        id: 345,
        chapter: 11,
        question: "Câu 13. Tính xác suất Naive Bayes P(x|Yes) với x=(Female, Senior, Low) (dùng Laplace smoothing). Dữ liệu 4 Yes, 3 No. Female|Yes (2/4), Senior|Yes (2/4), Low|Yes (0/4).",
        options: [
            "0.036",
            "0.020",
            "0.015",
            "0.037"
        ],
        answer: "0.036"
    },
    {
        id: 346,
        chapter: 11,
        question: "Câu 14. KNN (K=3, Euclidean). Điểm x=(1,1). Dữ liệu: (2,3,A), (4,2,C), (1,9,B), (7,5,C), (4,9,C). Nhãn dự đoán?",
        options: [
            "C",
            "Một trong các nhãn sau: A",
            "Một trong các nhãn sau: A, B, C",
            "Một trong các nhãn sau: B, C"
        ],
        answer: "C"
    },
    {
        id: 347,
        chapter: 11,
        question: "Câu 15. Tính Information Gain của thuộc tính Gender. Entropy gốc ~0.985. Male (2Y, 1N), Female (2Y, 2N).",
        options: [
            "1.92",
            "0.96",
            "0.93",
            "0.02"
        ],
        answer: "0.02"
    },
    {
        id: 348,
        chapter: 11,
        question: "Câu 16. Hard margin SVM. Vectors: [-5, 1], [-8, 8], [4, -2]. Lambda: [0.17, 0.09, 0.07]. Tìm w, b?",
        options: [
            "w = [−1.29  0.75],  b = −0.61",
            "w = [−0.41  −0.41],  b = −0.61",
            "w = [−1.29  0.75],  b = −1.15",
            "w = [−0.41  −0.41],  b = −1.15"
        ],
        answer: "w = [−0.41  −0.41],  b = −0.61"
    },
    {
        id: 349,
        chapter: 11,
        question: "Câu 17. Cập nhật Perceptron. w=[-2.9, 7.9, -3.2], b=5.8. x=[6.7, -6.4, 6.2], y=1. Trọng số mới?",
        options: [
            "w = [-2.9  7.9  -3.2]",
            "w = [0.5  4.7  -0.1]",
            "w = [3.8  1.5  3.0]",
            "w = [-9.6  14.3  -9.4]"
        ],
        answer: "w = [3.8  1.5  3.0]"
    },
    {
        id: 350,
        chapter: 11,
        question: "Câu 18. SVM thường ít nhạy cảm hơn với:",
        options: [
            "Không khớp (underfitting)",
            "Sự hiện diện của các đặc trưng không liên quan",
            "Dữ liệu có nhiều chiều",
            "Quá khớp (overfitting)"
        ],
        answer: "Quá khớp (overfitting)"
    },
    {
        id: 351,
        chapter: 11,
        question: "Câu 19. Trong học tăng cường, khi nào cần sử dụng q-value?",
        options: [
            "Khi không có dữ liệu về trạng thái và hành động.",
            "Khi cần phân loại các trạng thái.",
            "Khi muốn đánh giá sự kết hợp giữa trạng thái và hành động (state-action pair).",
            "Khi chỉ cần đánh giá giá trị của từng trạng thái."
        ],
        answer: "Khi muốn đánh giá sự kết hợp giữa trạng thái và hành động (state-action pair)."
    },
    {
        id: 352,
        chapter: 11,
        question: "Câu 20. Để khắc phục nhược điểm về việc xác định trước số cụm trong K-means, ta có thể sử dụng:",
        options: [
            "Phương pháp “khuỷu tay” (Elbow method)",
            "Độ đo đánh giá: Silhouette",
            "Không có cách nào",
            "Cả A và B"
        ],
        answer: "Cả A và B"
    },
	// --- BẮT ĐẦU ĐỀ 17 (DUY) - MÃ CHAPTER 12 ---
    {
        id: 353,
        chapter: 12,
        question: "Câu 1. Quy trình xây dựng hệ thống dự báo khách hàng rời bỏ:\n(i) Huấn luyện mô hình.\n(ii) Chuẩn bị và làm sạch dữ liệu.\n(iii) Sử dụng mô hình dự đoán.",
        options: [
            "(i) (iii) (ii)",
            "(iii) (ii) (i)",
            "(ii) (iii) (i)",
            "(ii) (i) (iii)"
        ],
        answer: "(ii) (i) (iii)"
    },
    {
        id: 354,
        chapter: 12,
        question: "Câu 2. Mục tiêu chính của bài toán phân lớp là:",
        options: [
            "Phân tích thành phần chính của dữ liệu.",
            "Gán một nhãn lớp cho một mẫu dữ liệu mới.",
            "Tìm mối quan hệ giữa các biến số.",
            "Dự đoán một giá trị số liên tục."
        ],
        answer: "Gán một nhãn lớp cho một mẫu dữ liệu mới."
    },
    {
        id: 355,
        chapter: 12,
        question: "Câu 3. Phương pháp đánh giá chéo nào liên quan đến việc ngẫu nhiên chia tập dữ liệu thành tập huấn luyện và tập kiểm nghiệm, thực hiện nhiều lần?",
        options: [
            "Lấy mẫu Bootstrap (Bootstrap sampling)",
            "Đánh giá chéo một dữ liệu (leave-one-out)",
            "Đánh giá chéo k-fold (k-fold cross-validation)",
            "Lấy mẫu con ngẫu nhiên (random subsampling)"
        ],
        answer: "Lấy mẫu con ngẫu nhiên (random subsampling)"
    },
    {
        id: 356,
        chapter: 12,
        question: "Câu 4. Phương pháp đánh giá chéo nào chia tập dữ liệu thành k tập con bằng nhau, lần lượt dùng 1 tập làm kiểm nghiệm?",
        options: [
            "Lấy mẫu Bootstrap",
            "Đánh giá chéo một dữ liệu (leave-one-out)",
            "Lấy mẫu con ngẫu nhiên",
            "Đánh giá chéo k-fold (k-fold cross-validation)"
        ],
        answer: "Đánh giá chéo k-fold (k-fold cross-validation)"
    },
    {
        id: 357,
        chapter: 12,
        question: "Câu 5. Thuật toán giảm dốc theo lô nhỏ (mini-batch) giúp:\n(i) Tăng tốc độ hội tụ.\n(ii) Giảm khả năng mắc kẹt ở cực trị cục bộ.",
        options: [
            "Cả (i) và (ii) đều đúng",
            "(ii) đúng",
            "(i) đúng",
            "Cả (i) và (ii) đều sai"
        ],
        answer: "Cả (i) và (ii) đều đúng"
    },
    {
        id: 358,
        chapter: 12,
        question: "Câu 6. Sự khác biệt cơ bản giữa hồi quy tuyến tính và hồi quy logistic là:",
        options: [
            "Hồi quy tuyến tính dùng để dự đoán giá trị liên tục, còn hồi quy logistic dự đoán xác suất thuộc về một lớp nhất định.",
            "Chỉ khác nhau về cách gọi.",
            "Hồi quy logistic phức tạp hơn hồi quy tuyến tính.",
            "Hồi quy tuyến tính dùng để phân loại, còn hồi quy logistic dùng để dự đoán."
        ],
        answer: "Hồi quy tuyến tính dùng để dự đoán giá trị liên tục, còn hồi quy logistic dự đoán xác suất thuộc về một lớp nhất định."
    },
    {
        id: 359,
        chapter: 12,
        question: "Câu 7. Giai đoạn huấn luyện của thuật toán Naive Bayes thực hiện việc gì?",
        options: [
            "Điều chỉnh trọng số của các tính năng.",
            "Thực hiện giảm kích thước.",
            "Ước tính xác suất tiên nghiệm (prior) và độ hợp lý (likelihood) dựa trên tập huấn luyện.",
            "Học phân phối xác suất chung."
        ],
        answer: "Ước tính xác suất tiên nghiệm (prior) và độ hợp lý (likelihood) dựa trên tập huấn luyện."
    },
    {
        id: 360,
        chapter: 12,
        question: "Câu 8. Trường hợp nào KHÔNG PHẢI là hạn chế của thuật toán kNN?",
        options: [
            "Khó xác định giá trị k tối ưu.",
            "Cần lưu trữ toàn bộ tập dữ liệu huấn luyện.",
            "Có thể xử lý hiệu quả các dữ liệu có nhiều đặc trưng (nhiều chiều).",
            "Độ phức tạp tính toán cao khi tập dữ liệu lớn."
        ],
        answer: "Có thể xử lý hiệu quả các dữ liệu có nhiều đặc trưng (nhiều chiều)."
    },
    {
        id: 361,
        chapter: 12,
        question: "Câu 9. Các nút lá trong cây quyết định đại diện cho:",
        options: [
            "Các điểm quyết định.",
            "Các tính toán trung gian.",
            "Các đặc trưng đầu vào.",
            "Lớp hoặc giá trị được dự đoán cuối cùng."
        ],
        answer: "Lớp hoặc giá trị được dự đoán cuối cùng."
    },
    {
        id: 362,
        chapter: 12,
        question: "Câu 10. Đầu ra của hàm kích hoạt sigmoid nằm trong khoảng nào?",
        options: [
            "[-1, 1]",
            "[0, ∞]",
            "[0, 1]",
            "[0,5 ; 1]"
        ],
        answer: "[0, 1]"
    },
    {
        id: 363,
        chapter: 12,
        question: "Câu 11. Điểm khác biệt chính giữa SVM lề cứng (hard-margin) và SVM lề mềm (soft-margin) là gì?",
        options: [
            "Hard-margin áp dụng cho dữ liệu không tách biệt tuyến tính.",
            "Hard-margin dùng kernel phi tuyến.",
            "Hard-margin không cho phép điểm nào vi phạm lề, Soft-margin cho phép một số điểm vi phạm để tối ưu hóa.",
            "Hard-margin cho phép vi phạm lề."
        ],
        answer: "Hard-margin không cho phép bất kỳ điểm dữ liệu nào nằm trong khoảng cách lề, trong khi soft-margin cho phép 1 số điểm vi phạm lề để tối ưu hóa phân loại"
    },
    {
        id: 364,
        chapter: 12,
        question: "Câu 12. Tính cập nhật Gradient Descent (Hồi quy tuyến tính):\nTheta_init = [-2.85, 0.72, -4.25]\nx = [1, 0.09, 0.02], y = -3.96, eta = 0.05. Tìm theta mới?",
        options: [
            "θ= [1.09   0.1   0.02]",
            "θ= [-2.9   0.72  -4.25]",
            "θ= [-2.8   0.72  -4.25]",
            "θ= [-2.96   0.71  -4.25]"
        ],
        answer: "θ= [-2.96   0.71  -4.25]"
    },
    {
        id: 365,
        chapter: 12,
        question: "Câu 14. KNN (K=3, Manhattan). Điểm x=(3,8). Dữ liệu: (1,9,C), (8,6,A), (2,1,C), (9,5,A), (8,2,B). Nhãn dự đoán?",
        options: [
            "1 trong các nhãn sau: A, C",
            "1 trong các nhãn sau: B",
            "C",
            "A"
        ],
        answer: "C"
    },
    {
        id: 366,
        chapter: 12,
        question: "Câu 15. Tính lợi thông tin (Information Gain) của thuộc tính “Income level” (High, Low, Medium) để phân chia dữ liệu. (Dữ liệu cho trong đề)",
        options: [
            "0.92",
            "0.59",
            "0.39",
            "0.07"
        ],
        answer: "0.59"
    },
    {
        id: 367,
        chapter: 12,
        question: "Câu 17. Mạng nơ-ron: 10 input -> 6 ẩn -> 5 ẩn -> 3 output. Số lượng trọng số (bao gồm bias)?",
        options: [
            "119",
            "105",
            "101",
            "126"
        ],
        answer: "119"
    },
    {
        id: 368,
        chapter: 12,
        question: "Câu 18. SVM thường ít nhạy cảm hơn với:",
        options: [
            "Không khớp (underfitting)",
            "Dữ liệu có nhiều chiều",
            "Quá khớp (overfitting)",
            "Sự hiện diện của các đặc trưng không liên quan"
        ],
        answer: "Dữ liệu có nhiều chiều"
    },
    {
        id: 369,
        chapter: 12,
        question: "Câu 19. Trong phân loại đa lớp dùng Hồi quy Logistic, phương pháp “One-vs-Rest” hoạt động thế nào và thách thức là gì?",
        options: [
            "Dùng cây quyết định phân chia.",
            "Huấn luyện K bộ phân loại nhị phân độc lập; thách thức là mất cân bằng lớp.",
            "Kết hợp các bộ phân loại Hồi quy Tuyến tính.",
            "Huấn luyện một bộ phân loại duy nhất với Softmax."
        ],
        answer: "Huấn luyện K bộ phân loại nhị phân độc lập (với K là số lớp), mỗi bộ phận loại phân biệt một lớp với tất cả các lớp còn lại; thách thức là sự mất cân bằng lớp trầm trọng trong từng bộ phận loại con."
    },
    {
        id: 370,
        chapter: 12,
        question: "Câu 20. Tại sao việc cắt tỉa cây (pruning) giúp giảm overfitting?",
        options: [
            "Vì nó giảm độ phức tạp của mô hình.",
            "Vì nó giảm lỗi trên tập huấn luyện.",
            "Vì nó loại bỏ các nhánh không có dữ liệu đủ lớn.",
            "Vì nó tối ưu hóa thời gian huấn luyện."
        ],
        answer: "Vì nó giảm độ phức tạp của mô hình."
    },
	// --- BẮT ĐẦU ĐỀ 27 (CHUNG) - MÃ CHAPTER 13 ---
    {
        id: 371,
        chapter: 13,
        question: "Câu 1. Dữ liệu đóng vai trò quan trọng trong học máy (machine learning) vì:",
        options: [
            "Dữ liệu là một phần của phần cứng máy tính.",
            "Dữ liệu cung cấp năng lượng cho máy tính.",
            "Dữ liệu chỉ cần thiết cho các thuật toán phức tạp.",
            "Dữ liệu được sử dụng để huấn luyện các mô hình học máy."
        ],
        answer: "Dữ liệu được sử dụng để huấn luyện các mô hình học máy."
    },
    {
        id: 372,
        chapter: 13,
        question: "Câu 2. Học máy (machine learning) là lĩnh vực tập trung vào:",
        options: [
            "Thực hiện các phép tính số học phức tạp với tốc độ cao.",
            "Mô phỏng quá trình suy nghĩ của con người.",
            "Tự động học tri thức từ dữ liệu để thực hiện các tác vụ mà không cần lập trình tường minh.",
            "Tương tác với con người một cách tự nhiên."
        ],
        answer: "Tự động học tri thức từ dữ liệu để thực hiện các tác vụ mà không cần lập trình tường minh."
    },
    {
        id: 373,
        chapter: 13,
        question: "Câu 3. Phương pháp đánh giá chéo nào chia tập dữ liệu thành k tập con bằng nhau và luân phiên kiểm thử?",
        options: [
            "Lấy mẫu con ngẫu nhiên (random subsampling)",
            "Lấy mẫu Bootstrap (bootstrap sampling)",
            "Đánh giá chéo một dữ liệu (leave-one-out cross-validation)",
            "Đánh giá chéo k-fold (k-fold cross-validation)"
        ],
        answer: "Đánh giá chéo k-fold (k-fold cross-validation)"
    },
    {
        id: 374,
        chapter: 13,
        question: "Câu 4. Trong bài toán hồi quy, độ đo nào thường được sử dụng để đánh giá sai số?",
        options: [
            "Sai số bình phương trung bình (Mean Squared Error – MSE)",
            "Entropy",
            "Độ chính xác tổng thể (Accuracy)",
            "Độ phủ (Recall)"
        ],
        answer: "Sai số bình phương trung bình (Mean Squared Error – MSE)"
    },
    {
        id: 375,
        chapter: 13,
        question: "Câu 5. Phát biểu nào sau đây đúng với thuật toán tối ưu giảm dốc (gradient descent)?",
        options: [
            "Tìm kiếm theo hướng tăng của đạo hàm.",
            "Tìm kiếm theo hướng đạo hàm.",
            "Tìm kiếm ngược hướng đạo hàm (để tìm cực tiểu).",
            "Tìm kiếm ngẫu nhiên."
        ],
        answer: "Tìm kiếm ngược hướng đạo hàm (để tìm cực tiểu)."
    },
    {
        id: 376,
        chapter: 13,
        question: "Câu 6. Mối quan hệ giữa hồi quy logistic và hồi quy tuyến tính là gì?",
        options: [
            "Cả hai đều dự đoán biến liên tục.",
            "Hồi quy logistic là trường hợp đặc biệt của hồi quy tuyến tính với hàm kích hoạt sigmoid.",
            "Hồi quy tuyến tính là trường hợp đặc biệt của hồi quy logistic.",
            "Chúng hoàn toàn không liên quan."
        ],
        answer: "Hồi quy logistic là trường hợp đặc biệt của hồi quy tuyến tính với hàm kích hoạt sigmoid."
    },
    {
        id: 377,
        chapter: 13,
        question: "Câu 7. Tại sao Laplace smoothing giúp cải thiện mô hình Naive Bayes?",
        options: [
            "Giảm thiểu ảnh hưởng của các sự kiện hiếm gặp (tránh xác suất bằng 0).",
            "Tăng tốc độ tính toán.",
            "Tăng cường các đặc trưng quan trọng.",
            "Giảm thiểu độ lệch của mô hình."
        ],
        answer: "Giảm thiểu ảnh hưởng của các sự kiện hiếm gặp (tránh xác suất bằng 0)."
    },
    {
        id: 378,
        chapter: 13,
        question: "Câu 8. Độ phức tạp tính toán của thuật toán kNN khi dự đoán (n mẫu, m đặc trưng)?",
        options: [
            "O(nm)",
            "O(n)",
            "O(n log n)",
            "O(m)"
        ],
        answer: "O(nm)"
    },
    {
        id: 379,
        chapter: 13,
        question: "Câu 9. Lý do CHÍNH cho việc cắt tỉa (pruning) trong cây quyết định là gì?",
        options: [
            "Tăng tốc quá trình huấn luyện.",
            "Giảm khả năng diễn giải.",
            "Tăng độ phức tạp.",
            "Giảm hiện tượng quá khớp (overfitting)."
        ],
        answer: "Giảm hiện tượng quá khớp (overfitting)."
    },
    {
        id: 380,
        chapter: 13,
        question: "Câu 10. Khi khởi tạo tất cả các trọng số trong mạng nơ-ron bằng 0, điều gì xảy ra?",
        options: [
            "Tất cả các nơ-ron trong cùng một lớp ẩn sẽ có cùng đầu ra (mất tính đối xứng).",
            "Mạng nơ-ron sẽ hội tụ nhanh hơn.",
            "Mạng nơ-ron dễ dàng thoát khỏi cực tiểu cục bộ.",
            "Mạng nơ-ron học hiệu quả hơn."
        ],
        answer: "Tất cả các nơ-ron trong cùng một lớp ẩn sẽ có cùng đầu ra (mất tính đối xứng)."
    },
    {
        id: 381,
        chapter: 13,
        question: "Câu 11. Mục tiêu của SVM trong quá trình huấn luyện là gì?",
        options: [
            "Tăng độ phức tạp biên quyết định.",
            "Đạt độ chính xác cao nhất trên tập train.",
            "Giảm thiểu khoảng cách margin.",
            "Tối đa hóa khoảng cách (margin) giữa biên quyết định và các điểm gần nhất."
        ],
        answer: "Tối đa hóa khoảng cách (margin) giữa biên quyết định và các điểm gần nhất."
    },
    {
        id: 382,
        chapter: 13,
        question: "Câu 12. Tính Gradient Descent: θ_init=[4.96, 3.1, 2.98], x=[1, 0.24, 1.88], y=2.62, η=0.03. Tìm θ mới?",
        options: [
            "θ = [4.7  3.04  2.49]",
            "θ = [4.44  2.97  2.0]",
            "θ = [5.22  3.16  3.47]",
            "θ = [8.69  2.08  16.33]"
        ],
        answer: "θ = [4.7  3.04  2.49]"
    },
    {
        id: 383,
        chapter: 13,
        question: "Câu 13. Tính xác suất Naive Bayes P(x|No) với x=(Male, Middle-aged, High) có Laplace smoothing. (Dữ liệu bảng)",
        options: [
            "0.021",
            "0.094",
            "0.016",
            "0.037"
        ],
        answer: "0.037"
    },
    {
        id: 384,
        chapter: 13,
        question: "Câu 14. KNN (K=3, Manhattan). Điểm x=(4,9). Dữ liệu: (7,9,B), (4,3,A), (2,2,C), (9,4,A), (9,1,B). Nhãn dự đoán?",
        options: [
            "A",
            "Một trong các nhãn sau: A, B, C",
            "Một trong các nhãn sau: B, C",
            "Một trong các nhãn sau: A, B"
        ],
        answer: "Một trong các nhãn sau: A, B, C"
    },
    {
        id: 385,
        chapter: 13,
        question: "Câu 15. Tính Information Gain của thuộc tính “Experience”. (Dữ liệu bảng)",
        options: [
            "0.01",
            "0.70",
            "0.29",
            "1.00"
        ],
        answer: "0.70"
    },
    {
        id: 386,
        chapter: 13,
        question: "Câu 16. Hard margin SVM. Vectors: [-5, -6], [-8, -7], [-6, -3]. Lambda: [0.4, 0.2, 0.2]. Tìm w, b?",
        options: [
            "w = [-4.8  -4.4], b = -2.2",
            "w = [-4.8  -4.4], b = 2.6",
            "w = [0.8  -0.4], b = -2.2",
            "w = [0.8  -0.4], b = 2.6"
        ],
        answer: "w = [0.8  -0.4], b = 2.6"
    },
    {
        id: 387,
        chapter: 13,
        question: "Câu 17. Cập nhật Perceptron. w=[-7.9, -7.8, -7.2], b=-5.4. x=[-2.0, 6.2, -0.5], y=1. Trọng số mới?",
        options: [
            "w = [-5.9  -14.0  -6.7]",
            "w = [-8.9  -4.7  -7.4]",
            "w = [-7.9  -7.8  -7.2]",
            "w = [-9.9  -1.6  -7.7]"
        ],
        answer: "w = [-9.9  -1.6  -7.7]"
    },
    {
        id: 388,
        chapter: 13,
        question: "Câu 18. Mặc dù Hồi quy Logistic là thuật toán phân loại, điều gì làm nó phù hợp cho phân loại nhị phân hơn Hồi quy tuyến tính?",
        options: [
            "Tự động xử lý đặc trưng phi tuyến.",
            "Tối ưu hóa độ chính xác thay vì lỗi bình phương.",
            "Sử dụng hàm sigmoid để ánh xạ đầu ra vào khoảng [0,1] (xác suất).",
            "Không yêu cầu phân phối chuẩn."
        ],
        answer: "Sử dụng hàm sigmoid để ánh xạ đầu ra vào khoảng [0,1] (xác suất)."
    },
    {
        id: 389,
        chapter: 13,
        question: "Câu 19. Đạo hàm suy biến (vanishing gradient) ảnh hưởng thế nào đến mạng nơ-ron?",
        options: [
            "Không ảnh hưởng.",
            "Gây ra hiện tượng nổ gradient.",
            "Chỉ xảy ra ở mạng nhân tạo.",
            "Đạo hàm trở nên quá nhỏ khi truyền ngược, làm chậm hoặc ngừng quá trình học."
        ],
        answer: "Đạo hàm trở nên quá nhỏ khi truyền ngược, làm chậm hoặc ngừng quá trình học."
    },
    {
        id: 390,
        chapter: 13,
        question: "Câu 20. Thuộc tính nào KHÔNG phù hợp để dùng K-means (dựa trên khoảng cách)? Dữ liệu: Tuổi, Giới tính, Bệnh nền.",
        options: [
            "Giới tính",
            "Cả Giới tính và Bệnh nền",
            "Bệnh nền",
            "Tuổi"
        ],
        answer: "Cả Giới tính và Bệnh nền"
    },
	// --- BẮT ĐẦU ĐỀ 28 (MINH) - MÃ CHAPTER 14 ---
    {
        id: 391,
        chapter: 14,
        question: "Câu 1. Các bước nào sau đây không thuộc giai đoạn chuẩn bị dữ liệu khi xây dựng ứng dụng học máy?",
        options: [
            "Phân tích khám phá dữ liệu (EDA).",
            "Chuẩn hóa dữ liệu (data normalization).",
            "Làm sạch dữ liệu (data cleaning).",
            "Đánh giá hiệu suất của mô hình."
        ],
        answer: "Đánh giá hiệu suất của mô hình."
    },
    {
        id: 392,
        chapter: 14,
        question: "Câu 2. Quy trình xây dựng hệ thống nhận diện khuôn mặt:\n(i) Sử dụng mô hình dự đoán.\n(ii) Chuẩn bị và làm sạch dữ liệu.\n(iii) Huấn luyện mô hình.",
        options: [
            "(ii) → (i) → (iii)",
            "(i) → (ii) → (iii)",
            "(ii) → (iii) → (i)",
            "(i) → (iii) → (ii)"
        ],
        answer: "(ii) → (iii) → (i)"
    },
    {
        id: 393,
        chapter: 14,
        question: "Câu 3. Phương pháp đánh giá chéo nào sử dụng một điểm dữ liệu làm tập kiểm nghiệm, phần còn lại làm tập huấn luyện?",
        options: [
            "Đánh giá chéo k-fold",
            "Lấy mẫu Bootstrap",
            "Đánh giá chéo một dữ liệu (leave-one-out)",
            "Lấy mẫu con ngẫu nhiên"
        ],
        answer: "Đánh giá chéo một dữ liệu (leave-one-out)"
    },
    {
        id: 394,
        chapter: 14,
        question: "Câu 4. Phương pháp đánh giá chéo nào chia ngẫu nhiên dữ liệu thành train/test và thực hiện nhiều lần?",
        options: [
            "Đánh giá chéo k-fold",
            "Lấy mẫu Bootstrap",
            "Lấy mẫu con ngẫu nhiên (random subsampling)",
            "Đánh giá chéo một dữ liệu"
        ],
        answer: "Lấy mẫu con ngẫu nhiên (random subsampling)"
    },
    {
        id: 395,
        chapter: 14,
        question: "Câu 5. Thuật toán giảm dốc theo lô nhỏ (mini-batch) giúp:\n(i) Tăng tốc độ hội tụ.\n(ii) Giảm khả năng mắc kẹt ở cực tiểu cục bộ.",
        options: [
            "Cả (i) và (ii) đều đúng.",
            "Cả (i) và (ii) đều sai.",
            "(i) đúng.",
            "(ii) đúng."
        ],
        answer: "Cả (i) và (ii) đều đúng."
    },
    {
        id: 396,
        chapter: 14,
        question: "Câu 6. Mục tiêu chính của hồi quy tuyến tính là gì?",
        options: [
            "Để mô hình hóa mối quan hệ giữa một biến phụ thuộc và một hoặc nhiều biến độc lập.",
            "Để phân loại dữ liệu.",
            "Để giảm chiều dữ liệu.",
            "Để nhóm các điểm dữ liệu."
        ],
        answer: "Để mô hình hóa mối quan hệ giữa một biến phụ thuộc và một hoặc nhiều biến độc lập."
    },
    {
        id: 397,
        chapter: 14,
        question: "Câu 7. Trong huấn luyện Naive Bayes, cần tính toán:\n(i) Xác suất mẫu dữ liệu.\n(ii) Xác suất tiên nghiệm.\n(iii) Xác suất có điều kiện.",
        options: [
            "(i) và (ii)",
            "(ii) và (iii)",
            "(i) và (iii)",
            "Cả ba xác suất trên"
        ],
        answer: "(ii) và (iii)"
    },
    {
        id: 398,
        chapter: 14,
        question: "Câu 8. Thứ tự đúng các bước trong thuật toán KNN:",
        options: [
            "Xác định nhãn k điểm gần nhất → Gán nhãn → Tính khoảng cách",
            "Gán nhãn → Tính khoảng cách → Xác định k điểm gần nhất",
            "Xác định k điểm gần nhất → Tính khoảng cách → Gán nhãn",
            "Tính khoảng cách → Xác định k điểm gần nhất → Gán nhãn"
        ],
        answer: "Tính khoảng cách → Xác định k điểm gần nhất → Gán nhãn"
    },
    {
        id: 399,
        chapter: 14,
        question: "Câu 9. Pruning trong cây quyết định có ý nghĩa gì?",
        options: [
            "Tăng số lượng nhánh.",
            "Cắt tỉa các nhánh thừa để giảm độ phức tạp và tránh overfitting.",
            "Thêm thuộc tính mới.",
            "Thay đổi thứ tự thuộc tính."
        ],
        answer: "Cắt tỉa các nhánh thừa để giảm độ phức tạp và tránh overfitting."
    },
    {
        id: 400,
        chapter: 14,
        question: "Câu 10. Thuật toán Perceptron phân loại chính xác trong trường hợp nào?",
        options: [
            "Dữ liệu có thể phân tách tuyến tính",
            "Dữ liệu không thể phân tách tuyến tính",
            "Bất kỳ loại dữ liệu nào",
            "Dữ liệu có nhiều nhãn"
        ],
        answer: "Dữ liệu có thể phân tách tuyến tính"
    },
    {
        id: 401,
        chapter: 14,
        question: "Câu 11. Mục tiêu của SVM trong huấn luyện mô hình phân lớp là gì?",
        options: [
            "Đạt độ chính xác cao nhất trên tập huấn luyện",
            "Tăng độ phức tạp của biên quyết định",
            "Giảm khoảng cách (margin) giữa các lớp",
            "Tối đa hóa khoảng cách (margin) giữa siêu phẳng phân tách và các điểm gần nhất"
        ],
        answer: "Tối đa hóa khoảng cách (margin) giữa siêu phẳng phân tách và các điểm gần nhất"
    },
    {
        id: 402,
        chapter: 14,
        question: "Câu 12. Tính Gradient Descent hồi quy tuyến tính: θ_init=[-2.75, 3.13, 4.16], x=[1, 0.16, 0.28], y=-0.68, η=0.03. Tìm θ mới?",
        options: [
            "θ = [-2.73   3.13   4.17]",
            "θ = [-2.76   3.13   4.16]",
            "θ = [-2.74   3.13   4.16]",
            "θ = [-0.4   -0.06   -0.11]"
        ],
        answer: "θ = [-2.74   3.13   4.16]"
    },
    {
        id: 403,
        chapter: 14,
        question: "Câu 13. Tính xác suất Naive Bayes P(x|No) với x=(Male, Middle-aged, High). (Dữ liệu bảng)",
        options: [
            "0.013",
            "0.018",
            "0.074",
            "0.031"
        ],
        answer: "0.031"
    },
    {
        id: 404,
        chapter: 14,
        question: "Câu 14. KNN (K=3, Manhattan). Điểm x=(3,8). Dữ liệu: (1,9,C), (8,6,A), (2,1,C), (9,5,A), (8,2,B). Nhãn dự đoán?",
        options: [
            "C",
            "Một trong các nhãn sau: B",
            "Một trong các nhãn sau: A hoặc C",
            "A"
        ],
        answer: "C"
    },
    {
        id: 405,
        chapter: 14,
        question: "Câu 15. Tính Information Gain của thuộc tính “Emojis” (Smile :), Frown :(). Smile(4+,1-), Frown(0+,2-). Entropy gốc ~0.985.",
        options: [
            "0.26",
            "0.52",
            "0.47",
            "0.72"
        ],
        answer: "0.47"
    },
    {
        id: 406,
        chapter: 14,
        question: "Câu 16. Hard margin SVM. Vectors: [-2, 5], [3, -2], [-9, 7]. Lambda: [0.3, 0.13, 0.16]. Tìm w, b?",
        options: [
            "w = [-1.65  2.36], b = -1.27",
            "w = [-1.65  2.36], b = -0.93",
            "w = [0.45  0.64], b = -0.93",
            "w = [0.45  0.64], b = -1.27"
        ],
        answer: "w = [0.45  0.64], b = -1.27"
    },
    {
        id: 407,
        chapter: 14,
        question: "Câu 17. Cập nhật Perceptron. w=[-1.0, -4.6, -5.9], b=7.8. x=[-2.7, -2.6, -3.8], y=-1. Trọng số mới?",
        options: [
            "[-3.7  -7.2  -9.7]",
            "[1.7   -2.0   -2.1]",
            "[-1.0  -4.6  -5.9]",
            "[0.4  -3.3   -4.0]"
        ],
        answer: "[1.7   -2.0   -2.1]"
    },
    {
        id: 408,
        chapter: 14,
        question: "Câu 18. Trạng thái trong học tăng cường có ảnh hưởng gì đến hành động của tác nhân?",
        options: [
            "Trạng thái giúp Xác định mục tiêu.",
            "Trạng thái Không ảnh hưởng đến hành động.",
            "Trạng thái Quyết định hành động tiếp theo của tác nhân sẽ thực hiện.",
            "Trạng thái Chỉ được dùng để đánh giá kết quả."
        ],
        answer: "Trạng thái Quyết định hành động tiếp theo của tác nhân sẽ thực hiện."
    },
    {
        id: 409,
        chapter: 14,
        question: "Câu 19. Hồi quy Logistic phù hợp hơn Hồi quy Tuyến tính cho phân loại nhị phân vì:",
        options: [
            "Sử dụng hàm sigmoid để ánh xạ đầu ra tuyến tính vào phạm vi [0,1], biểu thị xác suất.",
            "Tối ưu hóa trực tiếp độ chính xác.",
            "Không yêu cầu phân phối chuẩn.",
            "Tự động xử lý đặc trưng không tuyến tính."
        ],
        answer: "Sử dụng hàm sigmoid để ánh xạ đầu ra tuyến tính vào phạm vi [0,1], biểu thị xác suất."
    },
    {
        id: 410,
        chapter: 14,
        question: "Câu 20. Kỹ thuật tối ưu chi phí tính toán khoảng cách trong kNN nào hiệu quả nhất với dữ liệu nhiều chiều?",
        options: [
            "KD-Tree",
            "Ball-Tree",
            "Approximate Nearest Neighbors",
            "Brute Force"
        ],
        answer: "Approximate Nearest Neighbors"
    },
	// --- BẮT ĐẦU ĐỀ 30 (THÀNH) - MÃ CHAPTER 15 ---
    {
        id: 411,
        chapter: 15,
        question: "Câu 1. Quy trình xây dựng hệ thống phân loại sản phẩm lỗi:\n(i) Sử dụng mô hình.\n(ii) Huấn luyện mô hình.\n(iii) Chuẩn bị và làm sạch dữ liệu.",
        options: [
            "(iii) (ii) (i)",
            "(i) (iii) (ii)",
            "(ii) (i) (iii)",
            "(ii) (iii) (i)"
        ],
        answer: "(iii) (ii) (i)"
    },
    {
        id: 412,
        chapter: 15,
        question: "Câu 2. Phát biểu đúng về tập huấn luyện (hệ thống gợi ý vay tín dụng):\n(i) Gồm đầu vào và đầu ra mong muốn.\n(ii) Tập huấn luyện và kiểm nghiệm là một.\n(iii) Dùng cho học có giám sát.\n(iv) Chỉ chứa đầu vào.",
        options: [
            "Cả 4 phát biểu trên.",
            "(i) và (iii)",
            "(i), (ii) và (iii)",
            "(ii), (iii) và (iv)"
        ],
        answer: "(i) và (iii)"
    },
    {
        id: 413,
        chapter: 15,
        question: "Câu 3. Trong bài toán hồi quy, độ đo nào đánh giá mức độ phù hợp giữa giá trị dự đoán và thực tế?",
        options: [
            "Sai số bình phương trung bình (MSE)",
            "Độ phủ (Recall)",
            "Entropy",
            "Độ chính xác tổng thể (Accuracy)"
        ],
        answer: "Sai số bình phương trung bình (MSE)"
    },
    {
        id: 414,
        chapter: 15,
        question: "Câu 4. Trong ma trận nhầm lẫn, 'âm tính giả' (False Negative - FN) là gì?",
        options: [
            "Dự đoán dương tính trong khi thực tế âm tính.",
            "Dự đoán âm tính trong khi thực tế dương tính.",
            "Dự đoán dương tính và thực tế dương tính.",
            "Dự đoán âm tính và thực tế âm tính."
        ],
        answer: "Dự đoán âm tính trong khi thực tế dương tính."
    },
    {
        id: 415,
        chapter: 15,
        question: "Câu 5. Lợi ích của thuật toán giảm dốc theo lô nhỏ (mini-batch):\n(i) Tăng tốc độ hội tụ.\n(ii) Giảm khả năng mắc kẹt ở cực tiểu cục bộ.",
        options: [
            "(ii) đúng.",
            "Cả (i) và (ii) đều sai.",
            "Cả (i) và (ii) đều đúng.",
            "(i) đúng."
        ],
        answer: "Cả (i) và (ii) đều đúng."
    },
    {
        id: 416,
        chapter: 15,
        question: "Câu 6. Hồi quy logistic thường được sử dụng cho bài toán nào?",
        options: [
            "Dự đoán giá trị liên tục.",
            "Giảm chiều dữ liệu.",
            "Phân cụm dữ liệu.",
            "Phân loại nhị phân hoặc đa lớp."
        ],
        answer: "Phân loại nhị phân hoặc đa lớp."
    },
    {
        id: 417,
        chapter: 15,
        question: "Câu 7. Trong huấn luyện Naive Bayes, cần tính toán:\n(i) Xác suất mẫu.\n(ii) Xác suất tiên nghiệm.\n(iii) Xác suất có điều kiện.",
        options: [
            "Cả ba xác suất trên.",
            "(i) và (iii)",
            "(i) và (ii)",
            "(ii) và (iii)"
        ],
        answer: "(ii) và (iii)"
    },
    {
        id: 418,
        chapter: 15,
        question: "Câu 8. Giả định CHÍNH của thuật toán k-láng giềng gần nhất (kNN) là gì?",
        options: [
            "Các mẫu dữ liệu có tính chất tương đồng có khả năng cao mang nhãn giống nhau.",
            "Các điểm dữ liệu có thể phân tách tuyến tính.",
            "Các tính năng độc lập với nhau.",
            "Các tính năng tuân theo phân phối Gaussian."
        ],
        answer: "Các mẫu dữ liệu có tính chất tương đồng có khả năng cao mang nhãn giống nhau."
    },
    {
        id: 419,
        chapter: 15,
        question: "Câu 9. Mục tiêu chính của thuật toán cây quyết định là gì?",
        options: [
            "Tạo ra một mô hình phân loại hoặc hồi quy dưới dạng một cây.",
            "Tối ưu hóa hàm mục tiêu.",
            "Dự đoán xu hướng tương lai.",
            "Xây dựng cấu trúc dữ liệu biểu diễn mối quan hệ biến."
        ],
        answer: "Tạo ra một mô hình phân loại hoặc hồi quy dưới dạng một cây."
    },
    {
        id: 420,
        chapter: 15,
        question: "Câu 10. Chức năng của lan truyền ngược (backpropagation) là gì?",
        options: [
            "Chuyển đổi trọng số ngẫu nhiên.",
            "Tăng tốc độ huấn luyện.",
            "Tính toán đạo hàm hàm mất mát bằng cách lan truyền lỗi ngược từ đầu ra về đầu vào.",
            "Lưu trữ trọng số."
        ],
        answer: "Tính toán đạo hàm hàm mất mát bằng cách lan truyền lỗi ngược từ đầu ra về đầu vào."
    },
    {
        id: 421,
        chapter: 15,
        question: "Câu 11. 'Support vectors' trong SVM là gì và tại sao quan trọng?",
        options: [
            "Điểm nằm xa biên nhất.",
            "Điểm nằm gần hoặc trên siêu phẳng biên; quyết định vị trí và hướng của siêu phẳng tối ưu.",
            "Điểm bị phân loại sai.",
            "Tất cả điểm dữ liệu."
        ],
        answer: "Điểm nằm gần hoặc trên siêu phẳng biên; quyết định vị trí và hướng của siêu phẳng tối ưu."
    },
    {
        id: 422,
        chapter: 15,
        question: "Câu 18. Tại sao K-means ít dùng cho dữ liệu thuộc tính rời rạc?",
        options: [
            "Chỉ xử lý dữ liệu số.",
            "Yêu cầu chuẩn hóa.",
            "Chỉ hợp với phân phối chuẩn.",
            "Vì K-means tính toán khoảng cách giá trị số, với thuộc tính rời rạc không thứ tự thì khoảng cách không có ý nghĩa."
        ],
        answer: "Vì K-means tính toán khoảng cách giá trị số, với thuộc tính rời rạc không thứ tự thì khoảng cách không có ý nghĩa."
    },
    {
        id: 423,
        chapter: 15,
        question: "Câu 19. Đạo hàm suy biến (vanishing gradient) là gì?",
        options: [
            "Chỉ xảy ra ở mạng nhân tạo.",
            "Không ảnh hưởng quá trình học.",
            "Hiện tượng đạo hàm trở nên quá nhỏ khi truyền ngược, làm chậm quá trình học.",
            "Hiện tượng gradient quá lớn (nổ)."
        ],
        answer: "Hiện tượng đạo hàm trở nên quá nhỏ khi truyền ngược, làm chậm quá trình học."
    },
    {
        id: 424,
        chapter: 15,
        question: "Câu 20. Để khắc phục việc phải xác định trước số cụm trong K-means, có thể dùng:",
        options: [
            "Phương pháp Elbow.",
            "Độ đo Silhouette.",
            "Cả A và B.",
            "Không có cách nào."
        ],
        answer: "Cả A và B."
    },
	// --- BẮT ĐẦU ĐỀ HÀ TUẤN HIẾU - MÃ CHAPTER 16 ---
    {
        id: 425,
        chapter: 16,
        question: "Câu 1. Chất lượng của dữ liệu thu thập được ảnh hưởng bởi yếu tố nào sau đây?\n(i) Số lượng dữ liệu.\n(ii) Độ chính xác của nhãn.\n(iii) Sự đa dạng của dữ liệu.",
        options: [
            "Tất cả các yếu tố trên.",
            "(i) đúng.",
            "(ii) đúng.",
            "(iii) đúng."
        ],
        answer: "Tất cả các yếu tố trên."
    },
    {
        id: 426,
        chapter: 16,
        question: "Câu 2. Ngoài việc gán nhãn thủ công, còn có những cách nào khác để thu thập dữ liệu cho học có giám sát?\n(i) Dùng công cụ tự động hoá trích xuất dữ liệu từ nguồn mở.\n(ii) Dùng thuật toán/học để tạo nhãn giả.",
        options: [
            "Cả (i) và (ii) đều đúng.",
            "(i) đúng.",
            "Không có cách nào đúng.",
            "(ii) đúng."
        ],
        answer: "Cả (i) và (ii) đều đúng."
    },
    {
        id: 427,
        chapter: 16,
        question: "Câu 3. Trong đánh giá mô hình hồi quy, độ đo nào sau đây có giá trị càng lớn thì hiệu suất càng tốt?",
        options: [
            "MSE",
            "MAE",
            "RMSE",
            "R² (R-squared)"
        ],
        answer: "R² (R-squared)"
    },
    {
        id: 428,
        chapter: 16,
        question: "Câu 4. Trong bài toán dự đoán giá nhà, độ đo nào phù hợp nhất để đánh giá hiệu quả mô hình?",
        options: [
            "RMSE",
            "F1-score",
            "Recall",
            "Accuracy"
        ],
        answer: "RMSE"
    },
    {
        id: 429,
        chapter: 16,
        question: "Câu 5. So sánh quá trình hội tụ của mini-batch gradient descent và batch gradient descent, nhận xét nào đúng?",
        options: [
            "Mini-batch luôn hội tụ ổn định hơn.",
            "Luôn cho quỹ đạo hội tụ giống nhau.",
            "Mini-batch thường có quỹ đạo hội tụ dao động hơn.",
            "Batch luôn hội tụ nhanh hơn."
        ],
        answer: "Mini-batch thường có quỹ đạo hội tụ dao động hơn."
    },
    {
        id: 430,
        chapter: 16,
        question: "Câu 6. Trong hồi quy logistic, ngưỡng (threshold) dùng để:",
        options: [
            "Quyết định mẫu thuộc lớp nào dựa trên xác suất dự đoán.",
            "Cân bằng dữ liệu.",
            "Tính toán entropy.",
            "Tính độ chính xác mô hình."
        ],
        answer: "Quyết định mẫu thuộc lớp nào dựa trên xác suất dự đoán."
    },
    {
        id: 431,
        chapter: 16,
        question: "Câu 7. Giả sử x là mẫu dữ liệu, y là nhãn. Công thức Bayes để tính xác suất hậu nghiệm P(y|x) là:",
        options: [
            "P(y|x) = P(y)P(x|y) / P(x)",
            "P(x) = P(y)P(x|y)",
            "P(y) = P(x|y)P(y)",
            "P(x|y) = P(x)P(y|x) / P(y)"
        ],
        answer: "P(y|x) = P(y)P(x|y) / P(x)"
    },
    {
        id: 432,
        chapter: 16,
        question: "Câu 8. Thứ tự đúng của các bước trong thuật toán KNN là:",
        options: [
            "Xác định nhãn gần nhất → tính khoảng cách → chọn k",
            "Lấy mẫu → tính khoảng cách → xác định nhãn",
            "Xác định nhãn → gán nhãn → tính khoảng cách",
            "Tính khoảng cách → chọn k điểm gần nhất → gán nhãn theo đa số"
        ],
        answer: "Tính khoảng cách → chọn k điểm gần nhất → gán nhãn theo đa số"
    },
    {
        id: 433,
        chapter: 16,
        question: "Câu 9. Nếu chọn thuộc tính để chia trong cây quyết định: IG(A)=0.8, IG(B)=0.6. Chọn:",
        options: [
            "Thuộc tính B",
            "Không đủ thông tin",
            "Thuộc tính A",
            "Cả hai như nhau"
        ],
        answer: "Thuộc tính A"
    },
    {
        id: 434,
        chapter: 16,
        question: "Câu 10. Đầu ra của hàm kích hoạt sigmoid nằm trong khoảng:",
        options: [
            "[−1, 1]",
            "[0, ∞]",
            "[0.5, 1]",
            "[0, 1]"
        ],
        answer: "[0, 1]"
    },
    {
        id: 435,
        chapter: 16,
        question: "Câu 11. “Support vectors” trong SVM là những điểm dữ liệu nào và vì sao quan trọng?",
        options: [
            "Các điểm nằm gần/trên biên (margin hyperplane), quyết định vị trí & hướng siêu phẳng tối ưu.",
            "Tất cả điểm trong tập huấn luyện.",
            "Các điểm bị phân loại sai hoàn toàn.",
            "Các điểm nằm xa siêu phẳng nhất."
        ],
        answer: "Các điểm nằm gần/trên biên (margin hyperplane), quyết định vị trí & hướng siêu phẳng tối ưu."
    },
    {
        id: 436,
        chapter: 16,
        question: "Câu 12. Tính Gradient Descent 1 bước: θ=[-0.96, 4.84, -3.26], x=[1.0, 1.74, 0.14], y=-0.31, η=0.04. Tham số mới?",
        options: [
            "[-0.67, 5.35, -3.22]",
            "[7.32, 12.73, 1.02]",
            "[-1.55, 3.82, -3.34]",
            "[-1.25, 4.33, -3.30]"
        ],
        answer: "[-1.25, 4.33, -3.30]"
    },
    {
        id: 437,
        chapter: 16,
        question: "Câu 13. Tính xác suất Naive Bayes P(x|No) với x=(Female, Young, High) (dùng Laplace smoothing).",
        options: [
            "0.037",
            "0.016",
            "0.021",
            "0.094"
        ],
        answer: "0.037"
    },
    {
        id: 438,
        chapter: 16,
        question: "Câu 14. KNN (K=3, Manhattan). Điểm x=(4,1). Dữ liệu: (6,4,C), (8,2,A), (3,7,B), (8,5,A), (3,8,A). Nhãn dự đoán?",
        options: [
            "B",
            "C",
            "A",
            "Một trong các nhãn sau: A, B, C"
        ],
        answer: "Một trong các nhãn sau: A, B, C"
    },
    {
        id: 439,
        chapter: 16,
        question: "Câu 15. Tính Information Gain khi dùng thuộc tính Employment Status để chia (Entropy gốc ~0.985, Weighted Entropy ~0.39).",
        options: [
            "0.39",
            "0.07",
            "0.92",
            "0.59"
        ],
        answer: "0.59"
    },
    {
        id: 440,
        chapter: 16,
        question: "Câu 16. Hard-margin SVM. Support vectors: [-1, -1], [-2, -9], [0, 8]. Lambdas (nhân tử): [586, 310, 276]. Tìm w, b?",
        options: [
            "w=[-1206, -1168], b=31",
            "w=[-1206, -1168], b=-11.67",
            "w=[34, -4], b=31",
            "w=[34, -4], b=-11.67"
        ],
        answer: "w=[34, -4], b=31"
    },
    {
        id: 441,
        chapter: 16,
        question: "Câu 17. Mạng Nơ-ron (MNIST): 784 input, 1 lớp ẩn 128 nơ-ron, 10 output. Tổng số trọng số (không tính bias)?",
        options: [
            "102,544",
            "101,632",
            "101,770",
            "100,480"
        ],
        answer: "101,632"
    },
    {
        id: 442,
        chapter: 16,
        question: "Câu 18. Công thức Laplace Smoothing P(A=x|c) đúng là:",
        options: [
            "(count(x,c)) / (count(c) + V)",
            "(count(x,c) + 1) / (count(c) + V)",
            "(count(x,c) + V) / (count(c) + V)",
            "(count(x,c)) / (count(c) + 1)"
        ],
        answer: "(count(x,c) + 1) / (count(c) + V)"
    },
    {
        id: 443,
        chapter: 16,
        question: "Câu 19. Soft-margin SVM: nếu tăng tham số C trong hàm mục tiêu thì:",
        options: [
            "Mô hình đơn giản hơn, dễ underfitting",
            "Không ảnh hưởng",
            "Mô hình “cứng” hơn (ít regularization), dễ overfitting hơn",
            "Lề (margin) luôn tối đa"
        ],
        answer: "Mô hình “cứng” hơn (ít regularization), dễ overfitting hơn"
    },
    {
        id: 444,
        chapter: 16,
        question: "Câu 20. Nhược điểm khi dùng kernel trong SVM: (i) Tốn tài nguyên tính toán, (ii) Khó chọn kernel phù hợp, (iii) Không giải quyết được bài toán đa lớp.",
        options: [
            "(i) và (iii)",
            "Cả 3 đúng",
            "(i) và (ii)",
            "(ii) và (iii)"
        ],
        answer: "(i) và (ii)"
    },
	// --- BẮT ĐẦU ĐỀ LÊ THÀNH TRUNG - MÃ CHAPTER 17 ---
    {
        id: 445,
        chapter: 17,
        question: "Câu 1. Ứng dụng phát hiện gian lận thẻ tín dụng. Phát biểu nào đúng về tập huấn luyện?\n(i) Tập huấn luyện và kiểm nghiệm có thể trùng nhau.\n(ii) Tập huấn luyện không cần nhãn.\n(iii) Dùng cho học có giám sát.\n(iv) Bao gồm đầu vào và nhãn.",
        options: [
            "(iii) và (iv)",
            "Cả 4 phát biểu trên",
            "(i) (ii) (iii)",
            "(i) (iii) (iv)"
        ],
        answer: "(iii) và (iv)"
    },
    {
        id: 446,
        chapter: 17,
        question: "Câu 2. Quy trình xây dựng hệ thống gợi ý phim:\n(i) Chuẩn bị dữ liệu.\n(ii) Sử dụng mô hình dự đoán.\n(iii) Huấn luyện mô hình.",
        options: [
            "(i) → (iii) → (ii)",
            "(ii) → (i) → (iii)",
            "(iii) → (ii) → (i)",
            "(iii) → (i) → (ii)"
        ],
        answer: "(i) → (iii) → (ii)"
    },
    {
        id: 447,
        chapter: 17,
        question: "Câu 3. Phương pháp đánh giá chéo nào sử dụng một điểm dữ liệu làm tập kiểm nghiệm, phần còn lại làm tập huấn luyện?",
        options: [
            "Đánh giá chéo một dữ liệu (leave-one-out)",
            "Đánh giá chéo k-fold",
            "Lấy mẫu Bootstrap",
            "Lấy mẫu con ngẫu nhiên"
        ],
        answer: "Đánh giá chéo một dữ liệu (leave-one-out)"
    },
    {
        id: 448,
        chapter: 17,
        question: "Câu 15. Tính lợi thông tin (Information Gain) khi dùng thuộc tính “Credit Score” để chia dữ liệu (dữ liệu bảng 7 dòng: Good, Fair, Excellent...).",
        options: [
            "0.29",
            "0.70",
            "1.00",
            "0.01"
        ],
        answer: "0.29"
    },
    {
        id: 449,
        chapter: 17,
        question: "Câu 16. Hard-margin SVM. Các vector hỗ trợ: [-1, -3], [0, 3], [1, 5], [1, 8], [6, -4], [5, -7]. Tìm siêu phẳng phân tách?",
        options: [
            "w = [-1.29 0.75], b = -1.15",
            "w = [-0.41 -0.41], b = -0.61",
            "w = [-1.29 0.75], b = -0.61",
            "w = [-0.41 -0.41], b = -1.15"
        ],
        answer: "w = [-1.29 0.75], b = -1.15"
    },
    {
        id: 450,
        chapter: 17,
        question: "Câu 17. Mạng nơ-ron MNIST (784 đầu vào, 1 lớp ẩn 128 nơ-ron, 10 đầu ra). Tổng số trọng số (KHÔNG tính bias)?",
        options: [
            "101,632",
            "102,544",
            "101,770",
            "100,480"
        ],
        answer: "101,632"
    },
    {
        id: 451,
        chapter: 17,
        question: "Câu 18. Để khắc phục nhược điểm phải xác định trước số cụm trong K-means, ta có thể dùng:",
        options: [
            "Cả A và B",
            "Phương pháp “khuỷu tay” (Elbow method)",
            "Độ đo đánh giá: Silhouette",
            "Không có cách nào"
        ],
        answer: "Cả A và B"
    },
	// --- BẮT ĐẦU ĐỀ 15 (NGUYỄN ANH TUẤN) - MÃ CHAPTER 18 ---
    {
        id: 452,
        chapter: 18,
        question: "Câu 1. Quy trình xây dựng hệ thống gợi ý phim cá nhân hoá:\n(i) Chuẩn bị và làm sạch dữ liệu.\n(ii) Sử dụng mô hình dự đoán.\n(iii) Huấn luyện mô hình.",
        options: [
            "(i) → (iii) → (ii)",
            "(ii) → (i) → (iii)",
            "(iii) → (i) → (ii)",
            "(iii) → (ii) → (i)"
        ],
        answer: "(i) → (iii) → (ii)"
    },
    {
        id: 453,
        chapter: 18,
        question: "Câu 2. Phát biểu đúng về Tập huấn luyện (hệ thống phát hiện gian lận thẻ tín dụng):\n(i) Có thể trùng với tập kiểm nghiệm.\n(ii) Không cần nhãn.\n(iii) Dùng cho học có giám sát.\n(iv) Bao gồm đầu vào và nhãn.",
        options: [
            "(iii) và (iv)",
            "Cả 4 phát biểu trên",
            "(i), (iii) và (iv)",
            "(i), (ii) và (iii)"
        ],
        answer: "(iii) và (iv)"
    },
    {
        id: 454,
        chapter: 18,
        question: "Câu 3. Trong bài toán dự đoán giá nhà (hồi quy), độ đo nào phù hợp nhất?",
        options: [
            "RMSE",
            "Accuracy",
            "Recall",
            "F1-score"
        ],
        answer: "RMSE"
    },
    {
        id: 455,
        chapter: 18,
        question: "Câu 4. Phương pháp đánh giá chéo sử dụng MỘT điểm dữ liệu làm tập kiểm nghiệm, phần còn lại làm tập huấn luyện?",
        options: [
            "Đánh giá chéo một dữ liệu (leave-one-out cross-validation)",
            "Lấy mẫu con ngẫu nhiên",
            "Đánh giá chéo k-fold",
            "Lấy mẫu Bootstrap"
        ],
        answer: "Đánh giá chéo một dữ liệu (leave-one-out cross-validation)"
    },
    {
        id: 456,
        chapter: 18,
        question: "Câu 5. So với Batch Gradient Descent, Mini-batch Gradient Descent thường:",
        options: [
            "Mất ít thời gian tính toán hơn cho mỗi lần cập nhật tham số.",
            "Mất nhiều thời gian tính toán hơn.",
            "Thời gian tính toán tương đương.",
            "Không thể so sánh được."
        ],
        answer: "Mất ít thời gian tính toán hơn cho mỗi lần cập nhật tham số."
    },
    {
        id: 457,
        chapter: 18,
        question: "Câu 6. Sự khác biệt cơ bản giữa hồi quy tuyến tính và hồi quy logistic:",
        options: [
            "Hồi quy tuyến tính dự đoán giá trị liên tục, còn hồi quy logistic dự đoán xác suất thuộc về một lớp nhất định.",
            "Hồi quy tuyến tính dùng để phân loại, còn hồi quy logistic dùng để dự đoán.",
            "Hồi quy logistic phức tạp hơn.",
            "Chỉ khác nhau về cách gọi."
        ],
        answer: "Hồi quy tuyến tính dự đoán giá trị liên tục, còn hồi quy logistic dự đoán xác suất thuộc về một lớp nhất định."
    },
    {
        id: 458,
        chapter: 18,
        question: "Câu 7. Phân phối xác suất nào thường dùng cho đặc trưng liên tục trong Naive Bayes?",
        options: [
            "Phân phối Gaussian",
            "Phân phối Bernoulli",
            "Phân phối Poisson",
            "Phân phối theo cấp số nhân"
        ],
        answer: "Phân phối Gaussian"
    },
    {
        id: 459,
        chapter: 18,
        question: "Câu 8. Trong thuật toán kNN, giá trị 'k' chỉ:",
        options: [
            "Số lượng láng giềng gần nhất được xem xét để dự đoán.",
            "Thước đo khoảng cách.",
            "Số lượng lớp trong dữ liệu.",
            "Số lượng đặc trưng."
        ],
        answer: "Số lượng láng giềng gần nhất được xem xét để dự đoán."
    },
    {
        id: 460,
        chapter: 18,
        question: "Câu 9. Cây quyết định xác định điểm phân tách tốt nhất cho đặc trưng giá trị thực như thế nào?",
        options: [
            "Bằng cách tính entropy hoặc lợi thông tin cho các ngưỡng tiềm năng và chọn ngưỡng tạo ra nút con thuần túy nhất.",
            "Chọn ngẫu nhiên.",
            "So sánh trực tiếp với ngưỡng định trước.",
            "Tính MSE thấp nhất (cho phân loại)."
        ],
        answer: "Bằng cách tính entropy hoặc lợi thông tin cho các ngưỡng tiềm năng và chọn ngưỡng tạo ra nút con thuần túy nhất."
    },
    {
        id: 461,
        chapter: 18,
        question: "Câu 10. Chức năng của lan truyền ngược (backpropagation)?",
        options: [
            "Tính toán đạo hàm của hàm mất mát bằng cách lan truyền lỗi ngược từ đầu ra về các lớp ẩn và đầu vào.",
            "Chuyển đổi trọng số ngẫu nhiên.",
            "Tăng tốc độ huấn luyện.",
            "Lưu trữ trọng số."
        ],
        answer: "Tính toán đạo hàm của hàm mất mát bằng cách lan truyền lỗi ngược từ đầu ra về các lớp ẩn và đầu vào."
    },
    {
        id: 462,
        chapter: 18,
        question: "Câu 11. 'Support vectors' trong SVM là gì?",
        options: [
            "Các điểm dữ liệu nằm gần hoặc trên siêu phẳng biên (margin hyperplane); ảnh hưởng đến vị trí siêu phẳng tối ưu.",
            "Các điểm nằm xa siêu phẳng nhất.",
            "Tất cả các điểm dữ liệu.",
            "Các điểm bị phân loại sai."
        ],
        answer: "Các điểm dữ liệu nằm gần hoặc trên siêu phẳng biên (margin hyperplane); ảnh hưởng đến vị trí siêu phẳng tối ưu."
    },
    {
        id: 463,
        chapter: 18,
        question: "Câu 12. Tính Gradient Descent 1 bước: θ=[1.05, 3.04, 3.47], x=[1.0, 1.34, 0.47], y=-0.55, η=0.03. Tham số mới?",
        options: [
            "[0.83, 2.75, 3.37]",
            "[7.3, 9.79, 3.43]",
            "[0.61, 2.45, 3.26]",
            "[1.27, 3.33, 3.57]"
        ],
        answer: "[0.83, 2.75, 3.37]"
    },
    {
        id: 464,
        chapter: 18,
        question: "Câu 13. Tính xác suất Naive Bayes P(x|No) với x=(Female, Young, High) dùng Laplace Smoothing. (Dữ liệu: No(3 mẫu: 1M-Y-L, 4F-Y-M, 5M-M-L)).",
        options: [
            "0.037",
            "0.031",
            "0.074",
            "0.013"
        ],
        answer: "0.037"
    },
    {
        id: 465,
        chapter: 18,
        question: "Câu 14. KNN (K=3, Manhattan) cho điểm x=(4,9). Dữ liệu: (7,9,B), (4,3,A), (2,2,C), (9,4,A), (9,1,B).",
        options: [
            "Một trong các nhãn sau: A, B, C",
            "Một trong các nhãn sau: B, C",
            "Một trong các nhãn sau: A, B",
            "A"
        ],
        answer: "Một trong các nhãn sau: A, B, C"
    },
    {
        id: 466,
        chapter: 18,
        question: "Câu 15. Tính Information Gain cho thuộc tính 'Employment Status' (Employed, Unemployed, Self-Employed). (Entropy gốc ~0.985, Weighted Entropy ~0.39).",
        options: [
            "0.59",
            "0.39",
            "0.07",
            "0.92"
        ],
        answer: "0.59"
    },
    {
        id: 467,
        chapter: 18,
        question: "Câu 16. Hard-margin SVM. Support vectors: [-1, -1], [-2, -9], [0, 8]. Lambda: [586, 310, 276]. Tìm w, b?",
        options: [
            "w = [34, -4], b = 31",
            "w = [-1206, -1168], b = 31",
            "w = [-1206, -1168], b = -11.67",
            "w = [34, -4], b = -11.67"
        ],
        answer: "w = [34, -4], b = 31"
    },
    {
        id: 468,
        chapter: 18,
        question: "Câu 17. Mạng nơ-ron MNIST (784 input, 1 lớp ẩn 128, 10 output). Tổng trọng số (không bias)?",
        options: [
            "101,632",
            "102,544",
            "101,770",
            "100,480"
        ],
        answer: "101,632"
    },
    {
        id: 469,
        chapter: 18,
        question: "Câu 18. Công thức Laplace Smoothing P(A=x|c) đúng là:",
        options: [
            "(count(x,c) + 1) / (count(c) + V)",
            "(count(x,c)) / (count(c) + V)",
            "(count(x,c) + V) / (count(c) + V)",
            "(count(x,c)) / (count(c) + 1)"
        ],
        answer: "(count(x,c) + 1) / (count(c) + V)"
    },
    {
        id: 470,
        chapter: 18,
        question: "Câu 19. Soft-margin SVM: Tăng tham số C dẫn đến:",
        options: [
            "Mô hình 'cứng' hơn (ít regularization), dễ overfitting hơn.",
            "Mô hình đơn giản hơn, dễ underfitting.",
            "Không ảnh hưởng.",
            "Lề luôn tối đa."
        ],
        answer: "Mô hình 'cứng' hơn (ít regularization), dễ overfitting hơn."
    },
    {
        id: 471,
        chapter: 18,
        question: "Câu 20. Nhược điểm của Kernel SVM:",
        options: [
            "Tốn tài nguyên tính toán và Khó chọn kernel phù hợp.",
            "Không giải quyết được bài toán đa lớp.",
            "Cả 3 ý trên.",
            "Chỉ tốn tài nguyên."
        ],
        answer: "Tốn tài nguyên tính toán và Khó chọn kernel phù hợp."
    },
	// --- BẮT ĐẦU ĐỀ VIỆT - MÃ CHAPTER 19 ---
    {
        id: 472,
        chapter: 19,
        question: "Câu 1. Lý do nào sau đây thường khiến việc mong đợi mô hình hoạt động kém trong thực tế?\nA. Dữ liệu huấn luyện không đủ.\nB. Dữ liệu bị nhiễu.\nC. Dữ liệu không đầy đủ.\nD. Tất cả các lý do trên.",
        options: [
            "Tất cả các lý do trên",
            "Dữ liệu huấn luyện không đủ",
            "Dữ liệu bị nhiễu",
            "Dữ liệu không đầy đủ"
        ],
        answer: "Tất cả các lý do trên"
    },
    {
        id: 473,
        chapter: 19,
        question: "Câu 2. Ứng dụng phát hiện tấn công mạng. Phát biểu đúng về tập huấn luyện:\n(i) Tập huấn luyện và kiểm tra khác nhau.\n(ii) Gồm mẫu lưu lượng và nhãn (nếu có giám sát).\n(iii) Dùng để huấn luyện mô hình.\n(iv) Chỉ chứa đầu vào không nhãn.",
        options: [
            "(i), (ii), (iv)",
            "(i)",
            "(i), (ii), (iii)",
            "(ii), (iii)"
        ],
        answer: "(i), (ii), (iii)"
    },
    {
        id: 474,
        chapter: 19,
        question: "Câu 3. Trong bài toán hồi quy, độ đo nào đánh giá mức độ phù hợp giữa giá trị dự đoán và thực tế?",
        options: [
            "Sai số bình phương trung bình (MSE)",
            "Độ phủ (Recall)",
            "Độ chính xác tổng thể (Accuracy)",
            "Entropy"
        ],
        answer: "Sai số bình phương trung bình (MSE)"
    },
    {
        id: 475,
        chapter: 19,
        question: "Câu 4. Trong bài toán phân loại, khi dữ liệu bị mất cân bằng (imbalanced), tại sao Accuracy không phải là độ đo tốt nhất?",
        options: [
            "Vì Accuracy không tính đến chi phí sai lầm của từng lớp.",
            "Vì Accuracy sẽ cao giả tạo do mô hình đoán toàn lớp đa số.",
            "Vì Accuracy chỉ dùng cho hồi quy.",
            "Vì Accuracy không tính được khi dữ liệu lớn."
        ],
        answer: "Vì Accuracy sẽ cao giả tạo do mô hình đoán toàn lớp đa số."
    },
    {
        id: 476,
        chapter: 19,
        question: "Câu 9. Tại sao chúng ta cần cắt tỉa (pruning) cây quyết định?",
        options: [
            "Để giảm độ phức tạp của cây và tránh overfitting",
            "Để tăng độ phức tạp của cây",
            "Để giảm khả năng diễn giải của mô hình",
            "Để tăng tốc quá trình huấn luyện"
        ],
        answer: "Để giảm độ phức tạp của cây và tránh overfitting"
    },
    {
        id: 477,
        chapter: 19,
        question: "Câu 10. Thuật toán Perceptron có thể phân loại chính xác trường hợp nào?",
        options: [
            "Dữ liệu có thể phân tách tuyến tính",
            "Bất kỳ loại dữ liệu nào",
            "Dữ liệu phân loại có nhiều nhãn",
            "Dữ liệu không thể phân tách tuyến tính"
        ],
        answer: "Dữ liệu có thể phân tách tuyến tính"
    },
    {
        id: 478,
        chapter: 19,
        question: "Câu 11. Trong SVM, vector hỗ trợ (support vectors) là:",
        options: [
            "Các vector hỗ trợ tham gia xây dựng biên quyết định của mô hình",
            "Các vector có hệ số bằng 0 trong hàm quyết định",
            "Các vector lớn nhất trong tập dữ liệu",
            "Các vector là ngoại lệ và bị bỏ qua"
        ],
        answer: "Các vector hỗ trợ tham gia xây dựng biên quyết định của mô hình"
    },
    {
        id: 479,
        chapter: 19,
        question: "Câu 18. Việc chọn giá trị k trong kNN ảnh hưởng như thế nào?",
        options: [
            "k lớn làm giảm độ nhạy của mô hình với nhiễu nhưng có thể gây underfitting",
            "k nhỏ làm giảm khả năng mô hình với nhiễu nhưng có thể gây underfitting",
            "k lớn làm tăng độ nhạy của mô hình nhưng có thể gây overfitting",
            "k nhỏ không ảnh hưởng đến hiệu suất"
        ],
        answer: "k lớn làm giảm độ nhạy của mô hình với nhiễu nhưng có thể gây underfitting"
    },
    {
        id: 480,
        chapter: 19,
        question: "Câu 19. Trong học tăng cường, tác nhân (agent) học hỏi thông qua:",
        options: [
            "Tương tác với môi trường và nhận phần thưởng/phạt",
            "Đọc dữ liệu được gắn nhãn trước",
            "Phân tích cấu trúc dữ liệu tĩnh",
            "Sao chép hành vi của chuyên gia"
        ],
        answer: "Tương tác với môi trường và nhận phần thưởng/phạt"
    },
	// --- BẮT ĐẦU ĐỀ HIỀN - MÃ CHAPTER 20 ---
    {
        id: 481,
        chapter: 20,
        question: "Câu 1. Học máy (machine learning) là quá trình:",
        options: [
            "Cho máy tính khả năng tự động cải thiện hiệu suất dựa trên dữ liệu.",
            "Lập trình máy tính để thực hiện các tác vụ theo một tập hợp các quy tắc cố định.",
            "Tạo ra các thuật toán để giải quyết các bài toán toán học phức tạp.",
            "Mô phỏng quá trình học hỏi của con người thông qua các mạng thần kinh nhân tạo."
        ],
        answer: "Cho máy tính khả năng tự động cải thiện hiệu suất dựa trên dữ liệu."
    },
    {
        id: 482,
        chapter: 20,
        question: "Câu 2. Quy trình xây dựng hệ thống phân loại sản phẩm lỗi:\n(i) Sử dụng mô hình.\n(ii) Huấn luyện mô hình.\n(iii) Chuẩn bị và làm sạch dữ liệu.",
        options: [
            "(iii) (ii) (i)",
            "(ii) (iii) (i)",
            "(ii) (i) (iii)",
            "(i) (iii) (ii)"
        ],
        answer: "(iii) (ii) (i)"
    },
    {
        id: 483,
        chapter: 20,
        question: "Câu 3. Tại sao độ chính xác tổng thể (Accuracy) KHÔNG nên được sử dụng làm thước đo chính khi đánh giá bài toán phân loại có dữ liệu mất cân bằng?",
        options: [
            "Vì một mô hình có thể đạt Accuracy rất cao chỉ bằng cách luôn dự đoán lớp đa số.",
            "Vì Accuracy chỉ tập trung vào các dự đoán đúng của lớp thiểu số.",
            "Vì Accuracy chỉ có thể áp dụng cho các bài toán phân loại nhị phân.",
            "Vì Accuracy là một độ đo quá phức tạp."
        ],
        answer: "Vì một mô hình có thể đạt Accuracy rất cao chỉ bằng cách luôn dự đoán lớp đa số."
    },
    {
        id: 484,
        chapter: 20,
        question: "Câu 4. Trong bài toán phân loại nhị phân, độ đo nào biểu thị tỷ lệ phần trăm các trường hợp dương tính (positive) được mô hình dự đoán đúng trên tổng số các trường hợp dương tính thực tế?",
        options: [
            "Độ chính xác tổng thể (Accuracy)",
            "Độ phủ (Recall/Sensitivity)",
            "Điểm F1 (F1-score)",
            "Độ chính xác (Precision)"
        ],
        answer: "Độ phủ (Recall/Sensitivity)"
    },
    {
        id: 485,
        chapter: 20,
        question: "Câu 5. So với Batch Gradient Descent, thuật toán Mini-batch Gradient Descent thường:",
        options: [
            "Mất ít thời gian tính toán hơn trong một lần cập nhật tham số.",
            "Mất nhiều thời gian tính toán hơn.",
            "Thời gian tính toán tương đương.",
            "Không thể so sánh được thời gian tính toán."
        ],
        answer: "Mất ít thời gian tính toán hơn trong một lần cập nhật tham số."
    },
    {
        id: 486,
        chapter: 20,
        question: "Câu 6. Hàm sigmoid trong hồi quy logistic có vai trò:",
        options: [
            "Biến đổi giá trị dự đoán thành xác suất thuộc về một lớp nhất định.",
            "Giảm kích thước dữ liệu.",
            "Tính toán lỗi dự đoán.",
            "Cân bằng dữ liệu."
        ],
        answer: "Biến đổi giá trị dự đoán thành xác suất thuộc về một lớp nhất định."
    },
    {
        id: 487,
        chapter: 20,
        question: "Câu 7. Giả sử x là mẫu dữ liệu, y là nhãn, công thức Bayes để tính xác suất hậu nghiệm là gì?",
        options: [
            "P(y|x) = P(y) * P(x|y) / P(x)",
            "P(x) = P(y) * P(x|y)",
            "P(x|y) = P(x) * P(y|x) / P(y)",
            "P(y) = P(x|y) * P(y)"
        ],
        answer: "P(y|x) = P(y) * P(x|y) / P(x)"
    },
    {
        id: 488,
        chapter: 20,
        question: "Câu 8. kNN là một thuật toán 'lười' (lazy learning). Điều này có nghĩa là gì?",
        options: [
            "Không có giai đoạn huấn luyện rõ ràng; tất cả các tính toán được thực hiện tại thời điểm dự đoán.",
            "Mô hình không cần lưu trữ bất kỳ thông tin nào.",
            "Thuật toán tự động tìm ra số lượng láng giềng k.",
            "Nó chỉ học một tập hợp con nhỏ các điểm dữ liệu."
        ],
        answer: "Không có giai đoạn huấn luyện rõ ràng; tất cả các tính toán được thực hiện tại thời điểm dự đoán."
    },
    {
        id: 489,
        chapter: 20,
        question: "Câu 9. Các nút lá trong cây quyết định đại diện cho:",
        options: [
            "Lớp hoặc giá trị được dự đoán cuối cùng cho một mẫu đầu vào nhất định.",
            "Các tính toán trung gian.",
            "Các điểm quyết định nơi dữ liệu được phân chia.",
            "Các đặc trưng đầu vào."
        ],
        answer: "Lớp hoặc giá trị được dự đoán cuối cùng cho một mẫu đầu vào nhất định."
    },
    {
        id: 490,
        chapter: 20,
        question: "Câu 10. Thuật toán Perceptron có thể phân loại chính xác trong trường hợp nào?",
        options: [
            "Dữ liệu có thể phân tách tuyến tính.",
            "Dữ liệu không thể phân tách tuyến tính.",
            "Bất kỳ loại dữ liệu nào.",
            "Dữ liệu phân loại có nhiều nhãn."
        ],
        answer: "Dữ liệu có thể phân tách tuyến tính."
    },
    {
        id: 491,
        chapter: 20,
        question: "Câu 11. Lỗi phân loại của một điểm dữ liệu trong SVM được kiểm soát bởi tham số nào?",
        options: [
            "Tham số C (tham số Soft Margin).",
            "Tham số độ dốc của siêu phẳng.",
            "Tham số gamma trong kernel RBF.",
            "Tham số epsilon."
        ],
        answer: "Tham số C (tham số Soft Margin)."
    },
    {
        id: 492,
        chapter: 20,
        question: "Câu 12. Tính Gradient Descent: θ=[-3.12, 2.17, -4.21], x=[1.0, 0.05, 1.23], y=-8.95, η=0.05. Tham số mới?",
        options: [
            "θ = [-3.16, 2.17, -4.26]",
            "θ = [-3.08, 2.17, -4.16]",
            "θ = [-3.2, 2.17, -4.3]",
            "θ = [0.76, 0.04, 0.94]"
        ],
        answer: "θ = [-3.16, 2.17, -4.26]"
    },
    {
        id: 493,
        chapter: 20,
        question: "Câu 13. Tính xác suất Naive Bayes P(x|Yes) (x=Male, Middle-aged, Medium). Dữ liệu 4 Yes, 3 No. Count(Male|Yes)=2, Count(Mid|Yes)=1, Count(Med|Yes)=1.",
        options: [
            "0.031",
            "0.013",
            "0.018",
            "0.074"
        ],
        answer: "0.031"
    },
    {
        id: 494,
        chapter: 20,
        question: "Câu 14. kNN (K=3, Manhattan) cho điểm x=(3,3). Dữ liệu: (1,6,B), (3,9,C), (9,3,A), (7,6,A), (8,6,A).",
        options: [
            "Một trong các nhãn sau: A, B, C",
            "A",
            "Một trong các nhãn sau: B",
            "Một trong các nhãn sau: C"
        ],
        answer: "Một trong các nhãn sau: A, B, C"
    },
    {
        id: 495,
        chapter: 20,
        question: "Câu 15. Tính Information Gain cho thuộc tính 'Symptom 2' (Cough, No Cough, Sore Throat, Runny Nose). (Entropy gốc ~0.985, Weighted Entropy ~0.68).",
        options: [
            "0.31",
            "0.68",
            "1.92",
            "0.93"
        ],
        answer: "0.31"
    },
    {
        id: 496,
        chapter: 20,
        question: "Câu 16. Hard-margin SVM. Support vectors: [2, 9], [-1, 5], [2, 3]. Lambda: [0.01, 0.15, 0.15]. Tìm w, b?",
        options: [
            "w = [-0.43, 0.39], b = -1.45",
            "w = [0.17, 1.29], b = -1.45",
            "w = [-0.43, 0.39], b = -1.24",
            "w = [0.17, 1.29], b = -1.24"
        ],
        answer: "w = [-0.43, 0.39], b = -1.45"
    },
    {
        id: 497,
        chapter: 20,
        question: "Câu 17. Cập nhật trọng số Perceptron. w=[3.6, 6.7, -5.8], b=3.5. x=[-0.0, -0.7, -5.7], y=-1. Trọng số mới?",
        options: [
            "w = [3.6, 7.4, -0.1]",
            "w = [3.6, 6.0, -11.5]",
            "w = [3.6, 7.0, -2.9]",
            "w = [3.6, 6.7, -5.8]"
        ],
        answer: "w = [3.6, 7.4, -0.1]"
    },
    {
        id: 498,
        chapter: 20,
        question: "Câu 18. Hồi quy Logistic phù hợp hơn Hồi quy Tuyến tính cho phân loại nhị phân vì:",
        options: [
            "Sử dụng hàm sigmoid để ánh xạ đầu ra tuyến tính vào phạm vi [0, 1], biểu thị xác suất.",
            "Tối ưu hóa trực tiếp độ chính xác phân loại.",
            "Tự động xử lý đặc trưng không tuyến tính.",
            "Không yêu cầu phân phối chuẩn."
        ],
        answer: "Sử dụng hàm sigmoid để ánh xạ đầu ra tuyến tính vào phạm vi [0, 1], biểu thị xác suất."
    },
    {
        id: 499,
        chapter: 20,
        question: "Câu 19. Trong thuật toán ISODATA, nếu kết quả có quá nhiều cụm, cần thay đổi ngưỡng như thế nào để thu được ít cụm hơn?",
        options: [
            "Tăng dist_thresh và tăng std_thresh",
            "Giảm dist_thresh và giảm std_thresh",
            "Tăng dist_thresh và giảm std_thresh",
            "Giảm dist_thresh và tăng std_thresh"
        ],
        answer: "Tăng dist_thresh và tăng std_thresh"
    },
    {
        id: 500,
        chapter: 20,
        question: "Câu 20. Sự khác biệt chính giữa Random Forest và Bagging là gì?",
        options: [
            "Random Forest chọn ngẫu nhiên một tập con các đặc trưng để xây dựng mỗi cây, Bagging sử dụng tất cả đặc trưng.",
            "Random Forest sử dụng học tuần tự, Bagging học đồng thời.",
            "Random Forest sử dụng một mô hình mạnh, Bagging sử dụng nhiều mô hình yếu.",
            "Random Forest chỉ áp dụng cho phân loại."
        ],
        answer: "Random Forest chọn ngẫu nhiên một tập con các đặc trưng để xây dựng mỗi cây, Bagging sử dụng tất cả đặc trưng."
    },
	// --- BẮT ĐẦU ĐỀ ĐỨC - MÃ CHAPTER 21 ---
    {
        id: 501,
        chapter: 21,
        question: "Câu 1. Ngoài việc gán nhãn thủ công, còn có những cách nào khác để thu thập dữ liệu huấn luyện?\ni) Thu thập dữ liệu bằng công cụ tự động\nii) Sử dụng thuật toán để tạo nhãn giả (pseudo-labeling)",
        options: [
            "Cả i) và ii) đều đúng",
            "Không có cách nào đúng",
            "Chỉ i) đúng",
            "Chỉ ii) đúng"
        ],
        answer: "Cả i) và ii) đều đúng"
    },
    {
        id: 502,
        chapter: 21,
        question: "Câu 2. Trong học có giám sát (Supervised Learning), việc gán nhãn dữ liệu có vai trò gì?",
        options: [
            "Cung cấp đầu ra mong muốn cho mô hình học",
            "Giảm số chiều của dữ liệu",
            "Tăng tốc độ huấn luyện mô hình",
            "Loại bỏ dữ liệu nhiễu"
        ],
        answer: "Cung cấp đầu ra mong muốn cho mô hình học"
    },
    {
        id: 503,
        chapter: 21,
        question: "Câu 3. Tại sao độ đo Độ chính xác tổng thể (Accuracy) KHÔNG nên dùng trong bài toán dữ liệu mất cân bằng?",
        options: [
            "Vì Accuracy cao do dự đoán đúng lớp đa số, bỏ qua lớp thiểu số",
            "Vì Accuracy không đo được sai số",
            "Vì Accuracy chỉ dùng cho hồi quy",
            "Vì Accuracy phụ thuộc vào kích thước dữ liệu"
        ],
        answer: "Vì Accuracy cao do dự đoán đúng lớp đa số, bỏ qua lớp thiểu số"
    },
    {
        id: 504,
        chapter: 21,
        question: "Câu 4. Trong ma trận nhầm lẫn (Confusion Matrix), thuật ngữ “False Positive (FP)” ám chỉ điều gì?",
        options: [
            "Dự đoán dương tính nhưng thực tế âm tính",
            "Dự đoán âm tính nhưng thực tế dương tính",
            "Dự đoán dương tính và thực tế dương tính",
            "Dự đoán âm tính và thực tế âm tính"
        ],
        answer: "Dự đoán dương tính nhưng thực tế âm tính"
    },
    {
        id: 505,
        chapter: 21,
        question: "Câu 5. Siêu tham số nào sau đây ảnh hưởng TRỰC TIẾP đến tốc độ hội tụ của thuật toán học?",
        options: [
            "Learning rate",
            "Batch size",
            "Số epoch",
            "Số lớp đầu ra"
        ],
        answer: "Learning rate"
    },
    {
        id: 506,
        chapter: 21,
        question: "Câu 6. Trong hồi quy Logistic, giá trị ngưỡng (threshold) được sử dụng để làm gì?",
        options: [
            "Quyết định phân lớp dựa trên xác suất đầu ra",
            "Chuẩn hóa dữ liệu",
            "Đánh giá độ chính xác của mô hình",
            "Giảm kích thước dữ liệu"
        ],
        answer: "Quyết định phân lớp dựa trên xác suất đầu ra"
    },
    {
        id: 507,
        chapter: 21,
        question: "Câu 7. Tại sao Laplace smoothing giúp cải thiện độ chính xác trong Naive Bayes?",
        options: [
            "Vì giảm ảnh hưởng của các sự kiện hiếm",
            "Vì tăng số lượng dữ liệu huấn luyện",
            "Vì loại bỏ dữ liệu nhiễu",
            "Vì giảm độ lệch của mô hình"
        ],
        answer: "Vì giảm ảnh hưởng của các sự kiện hiếm"
    },
    {
        id: 508,
        chapter: 21,
        question: "Câu 8. Trong thuật toán k-Nearest Neighbors (kNN), giá trị k dùng để chỉ điều gì?",
        options: [
            "Số láng giềng gần nhất",
            "Số lớp trong dữ liệu",
            "Số chiều dữ liệu",
            "Thước đo khoảng cách"
        ],
        answer: "Số láng giềng gần nhất"
    },
    {
        id: 509,
        chapter: 21,
        question: "Câu 9. Lý do CHÍNH của việc cắt tỉa (pruning) trong thuật toán cây quyết định là gì?",
        options: [
            "Giảm hiện tượng overfitting",
            "Tăng độ phức tạp mô hình",
            "Giảm thời gian huấn luyện",
            "Tăng khả năng diễn giải mô hình"
        ],
        answer: "Giảm hiện tượng overfitting"
    },
    {
        id: 510,
        chapter: 21,
        question: "Câu 10. Đầu ra của hàm kích hoạt Sigmoid nằm trong khoảng nào?",
        options: [
            "(0, 1)",
            "(-1, 1)",
            "(0, 2)",
            "(0, 5)"
        ],
        answer: "(0, 1)"
    },
    {
        id: 511,
        chapter: 21,
        question: "Câu 15. Cho tập dữ liệu, khi sử dụng thuộc tính “Symptom 3” để phân chia trong cây quyết định, Information Gain thu được là bao nhiêu?",
        options: [
            "0.74",
            "0.13",
            "0.73",
            "0.86"
        ],
        answer: "0.74"
    },
    {
        id: 512,
        chapter: 21,
        question: "Câu 16. Cho tập dữ liệu 2 chiều. Với thuật toán Hard Margin SVM, vector trọng số và bias thu được là:",
        options: [
            "w = [-1.55, 2.89], b = 1.03",
            "w = [-1.22, -6.0], b = 1.25",
            "w = [-1.55, 2.89], b = 4.95",
            "w = [0.21, -0.63], b = 1.03"
        ],
        answer: "w = [-1.55, 2.89], b = 1.03"
    },
    {
        id: 513,
        chapter: 21,
        question: "Câu 17. Giả sử một nơ-ron với vector trọng số ban đầu và bias cho trước. Sau một bước cập nhật, vector trọng số mới là:",
        options: [
            "w = [-6.7, -3.4, 5.2]",
            "w = [-12.2, -6.0, 12.5]",
            "w = [-4.0, -2.1, 1.6]",
            "w = [-6.7, -3.4, 5.2]"
        ],
        answer: "w = [-6.7, -3.4, 5.2]"
    },
    {
        id: 514,
        chapter: 21,
        question: "Câu 18. Kỹ thuật nào giúp tối ưu chi phí tính toán khoảng cách trong kNN khi dữ liệu có số chiều lớn?",
        options: [
            "Approximate Nearest Neighbors",
            "Brute Force",
            "KD-Tree",
            "Ball-Tree"
        ],
        answer: "Approximate Nearest Neighbors"
    }
];
