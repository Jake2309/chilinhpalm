using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealEstateCore.Models
{
    public class NewsModel
    {
        public UInt32 Id { get; set; }
        public UInt32 AuthorId { get; set; }
        /// <summary>
        /// Tiêu đề bài viết
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Phục vụ SEO, phần description ngắn gon hiển thị khi search vs google
        /// </summary>
        public string MetaTitle { get; set; }

        /// <summary>
        /// Link ảnh của bài viết
        /// </summary>
        public string ImageUrl { get; set; }
        public string Summary { get; set; }

        /// <summary>
        /// Phục vụ SEO hiển thị URL dẫn đến bài viết
        /// vd: http://realestate.vn/bai-viet-so-mot
        /// </summary>
        public string Slug { get; set; }

        /// <summary>
        /// Bài có đc hiển thị lên web hay không
        /// </summary>
        public bool IsPublished { get; set; }

        /// <summary>
        /// Ngày tạo
        /// </summary>
        public DateTime CreatedAt { get; set; }

        /// <summary>
        /// Ngày cập nhật
        /// </summary>
        public DateTime UpdatedAt { get; set; }

        /// <summary>
        /// Ngày publish
        /// </summary>
        public DateTime PublishedAt { get; set; }

        /// <summary>
        /// Nội dung
        /// </summary>
        public string Content { get; set; }
    }
}
