import toast from "react-hot-toast"
import { useSelector } from "react-redux"

export default function UserTable({ users, setUsersState }) {

    const { user } = useSelector(state => state.auth)

    const handleDelete = async (id) => {

        if (user._id === id) {
            return toast.error('You can not delete yourself while Logged in.')
        }

        try {
            const res = await deleteUser(id)
            setUsersState(users.filter(e => e._id !== id))
            toast.success('User Deleted Succesfully 🎉')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="overflow-x-auto w-full py-2">
            <div className="overflow-hidden border-2 border-black border-t-0">
                <table className="w-full divide-y-2 divide-black">

                    <thead className="bg-black text-white">
                        <tr>
                            <th
                                scope="col"
                                className="py-3 px-6 text-left"
                            >
                                <input type="checkbox" />
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Order Placed
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                role
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y-2 divide-black">
                        {users?.map((person) => (
                            <tr key={person._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-9 h-9 bg-black uppercase font-bold flex justify-center items-center text-white">
                                            {person.name && person.name[0]}
                                        </div>

                                        <div className="ml-4">
                                            <div className="text-sm font-bold capitalize">{person.name}</div>
                                            <div className="text-sm text-gray-400">{person.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm capitalize text-gray-900">{person?.orders?.length}</div>
                                    <div className="text-sm text-gray-500"></div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {person.status ? "" : "Active"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.isAdmin ? "Admin" : "User"}</td>
                                <td className="px-4 pt-6 items-center justify-center whitespace-nowrap text-xl font-medium flex h-full">
                                    <p className="text-indigo-600 hover:text-indigo-900 mr-4">
                                        <i className="fas fa-pencil-alt cursor-pointer"></i>
                                    </p>
                                    <p className="text-red-600 hover:text-red-400" onClick={() => handleDelete(person._id)}>
                                        <i className="fas fa-trash-alt cursor-pointer"></i>
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}