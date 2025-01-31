import React, { useState }  from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import useBackgroundRotation from "./useBackgroundRotation";

function Home() {
  const { backgroundImage, opacity } = useBackgroundRotation();
  const images = [
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738058071/rs_w_1280_h_854_xitmqo.webp",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/uzfho1fszbsmym1vbgyu.jpg",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/azqo7gqtzganz5ks7tcy.jpg",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/oywawqucufwdk68luqet.jpg",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738058071/rs_w_1280_h_854_xitmqo.webp",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/uzfho1fszbsmym1vbgyu.jpg",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/azqo7gqtzganz5ks7tcy.jpg",
    "https://res.cloudinary.com/dasqsts9r/image/upload/v1738077970/oywawqucufwdk68luqet.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div
        className="cloudinary-image-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          opacity: opacity,
          transition: "opacity 1s ease-in-out", // Thêm transition để làm mượt mà hiệu ứng opacity
        }}
      >
        <Link to="/projects" className="project-title">
          <div className="project-title">Project</div>
        </Link>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
          <h2>THU HOUSE</h2>
          <div>Year: 2024</div>
          <div>Location: District 2, HCMC, Vietnam</div>
          <div>Site are: 877m2</div>
          <div>Floor area: 413.5 m2</div>
          <div>Client: Quỳnh Thư</div>
          <div>Photographer: Oki Hiroyuki</div>

          <h5 className="mt-5">Project gallery</h5>

          <div className="image-grid">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="gallery-img"
                onClick={() => setSelectedImage(img)} // Sự kiện khi click 
              />
            ))}
          </div>

           {/* Hiển thị popup nếu có ảnh được chọn */}
      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <div className="image-popup-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}

        </div>
        <div className="col-12 col-sm-12  col-md-6 col-lg-3">
          <h4>Thu House</h4>
          “When one is presented in a spatial setting which is fully and equally
          conditioned by the unraveling intensity acting between the physical
          and its opposite, their mind becomes stimulated and awakened.” THU
          House is a modern home capped with an overspanning timber roof to
          provide cover for a cluster of living functions below. Besides the
          primary residential program, it also serves as a meeting place,
          encouraging artistic residents from diverse disciplines to engage in
          exchange and interactions. The building's geometric configuration
          represents one's ongoing dialogues and desires for nature by
          emphasizing the concept of ‘Open’, which symbolizes both a percolation
          and a continuation of spatial exchange between the living world and
          its spiritual one. ‘A carefully curated and framed setting can change
          one’s worldview, just as an atmosphere can help sublimate an idea’
          Enhancing the ability to experience and contemplate The house spatial
          experience is facilitated by rearranging the core functions to its
          immediate peripheral spaces, which in turn unconventionally defines
          the center as a buffering zone, if not, the in-between space that aims
          to enhance the resident ability to perceive changes in their
          environment throughout the day. It is the kind of an atmosphere that
          is relational to Vietnamese living habits, fueled by intimate daily
          activities that always take place under the tropics sun, and cooling
          breezes. In the case of visual appreciation, when simple geometry is
          used to define the contemplative spaces, the strength of its
          experience is enhanced respectively. A square courtyard, with its
          surfaces animated by the dappling light broken up through the tree's
          canopies, and its space aromatically infused by the scent of tropical
          fruit trees and herbal bushes, found its presence at the center of the
          house’s living spaces. This atmospheric concoction has instilled the
          house’s spatial quality with the multifaceted nuances of the humid
          tropics Juxtapositionally, on the other side of the living space, a
          large patch of light is contained within the long rectangular
          geometry, whose top is finished with the poetic presence of a single
          beam holding up the large timber roof. Its shadow moves according to
          the position of the sun furthering the peaceful tranquility of this
          place. The architecture of the house utilized construction techniques
          known to local craftsman, from bricklayers with improved cement
          plastering techniques, to carpenters and their oversized timber waffle
          structure, to decorative ironworkers for thin door frame profiles, and
          lastly roofers for their expertise in thatched roof construction. The
          poetic encounter, whether exposed individually or between residents,
          can take place for a few hours or the course of multiple days in the
          form of artistic residency. In essence, the scents and the house's
          atmospheric quality will awaken the visitor's senses and invigorate
          them to be more aware of the environment that is changing every day.
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
          Nhà của Thư. Là một ngôi nhà mái gỗ hiện đại có khả năng trãi rộng và
          vượt nhịp lớn để phủ che tổ hợp các căn phòng nhỏ ấm áp cùng những
          gian sinh hoạt yên bình nằm bên dưới. Ngôi nhà đóng vai trò là nơi
          sinh hoạt gặp gỡ, khuyến khích sự trao đổi và tương tác giữa các cá
          nhân và các nghệ sỹ đa ngành và nơi đây cũng là 1 nơi để lưu trú. Cấu
          trúc hình học này thể hiện sự đối thoại và sự ngưỡng vọng của con
          người với thiên nhiên trong sự nhấn mạnh các khái niệm ‘khoảng mở’,
          ‘sự tuôn chảy’, ‘sự chắc lọc’ giữa cuộc sống thế tục với phần còn lại.
          “Một khung cảnh có thể làm thay đổi thế giới quan của một con người,
          cũng như một bầu không khí có thể giúp thăng hoa cho một ý tưởng” Tăng
          cường khả năng trãi nghiệm và chiêm nghiệm Đặc tính trãi nghiệm được
          thực hiện thông qua cách thức hoạt động và di chuyển giữa các vùng
          chức năng mà người sử dụng có thể vừa đi lại và vừa tiếp xúc. Sự tích
          hợp tự nhiên này đã góp phần nâng cao khả năng đón nhận về những biến
          đổi được thay đổi theo ngữ cảnh của môi trường. Để cụ thể hóa cho hành
          động thì các vùng trung tâm sử dụng của ngôi nhà đã hoán đổi vị trí ra
          bên ngoài. Sự hoán vị chức năng giữa các vùng trọng tâm trên mặt bằng
          được dịch chuyển sang vùng biên,– đây thực chất là vùng đệm, vùng
          khoảng giữa lý tưởng nằm sát liền kề với thiên nhiên, không khí nơi
          này sẽ tự nhiên gợi lên những hoài niệm đặc trưng vốn đã được ăn sâu
          từ tiềm thức xa xưa trong tập quán truyền thống, nơi ánh sáng và cơn
          gió tương tác thân mật với các hoạt động. Và ở khía cạnh chiêm nghiệm
          trực quan, khi mức độ nguyên chất trong hình học nguyên bản được sử
          dụng để tạo nên những khoảng chiêm nghiệm thì mức độ chiêm nghiệm về
          thực tại càng trở nên mạnh mẽ. Ánh sáng li ti cùng mùi hương thoang
          thoảng từ khu vực sân vuông đã tràn vào gian sinh hoạt chung của ngôi
          nhà thông qua các cơn gió mùa nhiệt đới. Như khi được hòa trộn cùng
          với nhau giữa mùi vị của khu vườn cây ăn trái với hương vị của những
          bụi cây rau mùi thì không khí của không gian ngôi nhà trở nên mang
          nhiều sắc thái và sự phong phú, vốn đã là đặc trưng riêng của xứ sở
          nhiệt đới ẩm. Trung tâm ngôi nhà giờ đây đã trở thành yêu tố mang tính
          kết nối. Như thể từ trong mênh mông, thiên nhiên đã được trừu tượng
          hóa bởi vật chất để mang lại cảm xúc mạnh mẽ cho nhu cầu tinh thần con
          người. Con người như một lần nữa, thông qua sự trừu tượng của khung
          cảnh trong thiên nhiên đã trở nên được kết nối với chính mình. Sự gặp
          gỡ giữa mọi người trong khung cảnh quanh ngôi nhà có thể diễn ra trong
          vài giờ cũng có thể trong thời gian dài theo hình thức lưu trú. Tất cả
          mùi vị và không khí của ngôi nhà mang lại đã tạo cho các giác quan của
          ngừơi thửơng lãm đựơc tỉnh táo và giúp cho nhận thức của họ trở nên
          sâu sắc về môi trường đang biến đổi theo từng ngày. “Khi con người
          hiện diện bên trong một khung cảnh được xác lập bởi sự rõ ràng và mạnh
          mẽ với đầy đủ trọng lượng của hữu hình và vô hình thì tâm trí con
          người trở nên bị kích thích và trở nên được đánh thức.”
        </div>
      </div>
      <div className="text-center mt-5"> facebook | instagram</div>
    </div>
  );
}

export default Home;
