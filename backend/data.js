import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Jotaro',
            email: 'admin@giovanna.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Josuke',
            email: 'user@jojo.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Nike Mercurial Vapor 14 Elite FG',
            category: 'Mens Cleats',
            image: '/images/p1.jpg',
            price: 330,
            countInStock: 10,
            brand: 'Nike', 
            rating: 5,
            numReviews: 1032,
            description: 'The Nike Mercurial Vapor 14 Elite AG features a new look with specialised components to let you play your fastest from start to finish. A cushioned insole helps prevent your foot from sliding, and the innovative plate provides instant responsiveness for quicker cuts at high speeds.',
        },
        {
            name: 'Nike Phantom GT Elite FG',
            category: 'Mens Cleats',
            image: '/images/phantom-gt.jpg',
            price: 325,
            countInStock: 20,
            brand: 'Nike', 
            rating: 4.5,
            numReviews: 456,
            description: 'The Nike Phantom GT Elite FG is a data-driven design engineered for precise attacks. Grippy texture across the Flyknit top and specialised traction on the bottom let you take control of the game.',
        },
        {
            name: 'Nike Tiempo Legend 8 Elite FG',
            category: 'Mens Cleats',
            image: '/images/tiempo-legend.jpg',
            price: 210,
            countInStock: 5,
            brand: 'Nike', 
            rating: 4.5,
            numReviews: 45,
            description: 'The Nike Tiempo Legend 8 Elite FG takes the legendary touch of premium kangaroo leather and adds foot-hugging Quadfit mesh in the lining and a wraparound Flyknit tongue that feels supportive under your arch.'
        },
        {
            name: 'Nike Hypervenom III Academy FG',
            category: 'Mens Cleats',
            image: '/images/hypervenom-III.jpg',
            price: 92,
            countInStock: 0,
            brand: 'Nike', 
            rating: 2.5,
            numReviews: 13,
            description: 'The Nike Hypervenom III has a solid leather touch and form-fitting tougue for increased lock down'
        },
    ]
}

export default data;