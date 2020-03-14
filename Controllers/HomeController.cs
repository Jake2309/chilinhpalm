using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RealEstateCore.Models;

namespace RealEstateCore.Controllers
{
    [Route("home")]
    public class HomeController : Controller
    {
        [Route("~/")]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [Route("detail/{projectType}")]
        public IActionResult ProjectDetail(string projectType)
        {
            if (String.IsNullOrEmpty(projectType))
            {
                projectType = "villa";
            }
            return View(new DetailModel { Project_Type = projectType });
        }

        [Route("news-detail/")]
        public IActionResult NewsDetail()
        {
            return View(new NewsModel());
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
