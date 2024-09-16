import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

const UpdateProfile = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Dialog open={open} >
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>
                            Update Profile
                        </DialogTitle>
                    </DialogHeader>
                    <form>

                        <div className='grid gap-4 py-4'>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" name="name" className="col-span-3" />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="text" name="email" className="col-span-3" />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="number">Number</Label>
                                <Input id="number" type="text" name="number" className="col-span-3" />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio">Bio</Label>
                                <Input id="bio" type="text" name="bio" className="col-span-3" />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills">Skills</Label>
                                <Input id="skills" type="text" name="skills" className="col-span-3" />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file">Resume</Label>
                                <Input id="file" type="file" accept="application/pdf" name="file" className="col-span-3" />
                            </div>

                        </div>
                        <DialogFooter>
                            {loading ? (
                                <Button className="w-full my-4">
                                    <Loader2 className="h-4 w-4 mr-4 animate-spin" /> Please wait
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full my-4">
                                    Update
                                </Button>
                            )}
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default UpdateProfile
