using System;
using System.ComponentModel.DataAnnotations;

namespace EagleFCWebsite.Models
{
    public class Player
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Position { get; set; }

        public int JerseyNumber { get; set; }
        public string Country { get; set; }
    }
}
